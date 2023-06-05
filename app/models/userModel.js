const mongoose = require('mongoose'); // Erase if already required
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const passwordComplexity = require('joi-password-complexity');

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        default:"user"
    },
    verified:{
        type:Boolean,
        default:false
    }
});

/*userSchema.pre('save',async function (next) {
    const salt = await bcrypt.genSalt(10);
    this.password= await bcrypt.hash(this.password, salt);
});
userSchema.methods.isPasswordMatch = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
};*/
userSchema.methods.generateAuthToken = function() {
    const token =  jwt.sign({_id: this._id},process.env.JWT_SECRET,{expiresIn:"3d"});
    return token;
};
const User = mongoose.model("user",userSchema);
const validate = (data)=>{
    const schema = Joi.object({
        firstname:Joi.string().required().label("First Name"),
        lastname:Joi.string().required().label("Last Name"),
        address:Joi.string().required().label("Address"),
        email:Joi.string().required().label("Email"),
        mobile:Joi.string().required().label("Mobile"),
        password:passwordComplexity().required().label("Password")
    });
    return schema.validate(data)
}
//Export the model
module.exports = {User,validate};