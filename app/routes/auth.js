const router = require('express').Router();
const { User } = require('../models/userModel');
const Token = require('../models/token');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const sendEmail = require('../utils/email');
const bcrypt = require('bcrypt');
const Joi = require('joi');

router.post('/', async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		//console.log(user);
		if (!user)
			return res
				.status(401)
				.send({ message: 'Invalid Email or Password' });

		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password,
		);
		//console.log(validPassword);
		if (!validPassword)
			return res
				.status(401)
				.send({ message: 'Invalid Email or Password' });
		if (!user.verified) {
			let token = await Token.findOne({ userId: user._id });
			if (!token) {
				token = await new Token({
					userId: user._id,
					token: crypto.randomBytes(32).toString('hex'),
				}).save();
				const url = `https://pizza-backend-50h0.onrender.com/api/user/${user.id}/verify/${token.token}`;
				await sendEmail(user.email, 'Verify Email', url);
			}

			return res.status(400).send({
				message: 'An Email sent to your account please verify',
			});

		}

		const token = user.generateAuthToken();
		res.status(200).send({
			data: token,
			user: user,
			message: 'logged in successfully',
		});
	} catch (error) {
		res.status(500).send({ message: 'Internal Server Error' });
	}
});
router.get('/jwt/verify', async (req, res) => {
	try {
		const user = await jwt.verify(
			req.query.token,
			process.env.JWT_SECRET,
		);
		const userData = await User.findOne({ _id: user._id });
		res.send({
			success: true,
			data: user,
			userData,
			message: 'Valid User',
		});
	} catch (error) {
		res.status(500).send({
			success: false,
			message: error?.message,
		});
		console.log(error);
	}
});

const validate = (data) => {
	const schema = Joi.object({
		email: Joi.string().email().required().label('Email'),
		password: Joi.string().required().label('Password'),
	});
	return schema.validate(data);
};

module.exports = router;