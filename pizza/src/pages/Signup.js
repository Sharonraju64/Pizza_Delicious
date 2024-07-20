
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Signup.css';
import bg from '../assets/2.jpg'

const Signup = () => {
	const [data, setData] = useState({
		firstname: '',
		lastname: '',
		address: '',
		mobile:'',
		email: '',
		password: '',
	});
	const [error, setError] = useState('');
	const [msg, setMsg] = useState('');

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = 'http://localhost:5000/api/user';
			const { data: res } = await axios.post(url, data);
			setMsg(res.message);
			console.log("success");
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
				console.log("error");
			}
		}
	};

	return (
		<div>
			<Navbar/>
			<div className='container' style={{ backgroundImage: `url(${bg})`}}>
			<div className='form'>
				<div className='r2'>
					<h1>Welcome Back</h1>
					<Link to='/login'>
						<button type='button' className='btn1'>
							Sign in
						</button>
					</Link>
				</div>
				<div className='l2'>
					<form
						className='form_container'
						onSubmit={handleSubmit}
					>
						<h1>Create Account</h1>
						<input
							type='text'
							placeholder='First Name'
							name='firstname'
							onChange={handleChange}
							value={data.firstName}
							required
							className='input'
						/>
						<input
							type='text'
							placeholder='Last Name'
							name='lastname'
							onChange={handleChange}
							value={data.lastName}
							required
							className='input'
						/>
						<input
							type='text'
							placeholder='Address'
							name='address'
							onChange={handleChange}
							value={data.address}
							required
							className='input'
						/>
						<input
							type='email'
							placeholder='Email'
							name='email'
							onChange={handleChange}
							value={data.email}
							required
							className='input'
						/>
						<input
							type='number'
							placeholder='Mobile'
							name='mobile'
							onChange={handleChange}
							value={data.mobile}
							required
							className='input'
						/>
						<input
							type='password'
							placeholder='Password'
							name='password'
							onChange={handleChange}
							value={data.password}
							required
							className='input'
						/>
						{error && (
							<div className="error_msg">{error}</div>
						)}
						{msg && <div className="success_msg">{msg}</div>
                        }
						<button type='submit' className='btn'onClick={handleSubmit}>
							Sign Up
						</button>
					</form>
				</div>
			</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Signup;