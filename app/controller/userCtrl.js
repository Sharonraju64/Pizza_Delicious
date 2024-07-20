const { generateToken } = require("../config/jwtToken");
const User = require("../models/userModel");
const asyncHandler=require('express-async-handler');
const validateMongoDbId = require("../utils/validateMongodbid");

const createUser = asyncHandler(async (req, res) => {
    const email = req.body.email;
    const findUser = await User.findOne({ email: email });
    if(!findUser) {
        // Create a new User
        const newUser = await User.create(req.body);
        res.json(newUser);
    }else{
        //console.log("user already exist");
        throw new Error("User Already Exists");
    }
});

const loginUserCtrl = asyncHandler(async (req, res)=>{
    const {email, password}=req.body;
    const findUser=await User.findOne({email: email});
    if(findUser && (findUser.isPasswordMatch(password))){
        res.json({
            _id: findUser?._id,
            firstname: findUser?.firstname,
            lastname:findUser?.lastname,
            email:findUser?.email,
            mobile:findUser?.mobile,
            role:findUser?.role,
            token:generateToken(findUser?._id),
        });
    }else{
        throw new Error("Invalid Credentials");
    }
});

const getallUser = asyncHandler(async(req, res)=>{
    try{
        const getUser = await User.find();
        res.json(getUser)
    }catch (error){
        throw new Error(error);
    }
});

const getaUser=asyncHandler(async(req,res)=>{
    const {id}= req.params;
    validateMongoDbId(id);
    try{
        const getaUser= await User.findById(id);
        res.json({
            getaUser,
        });
    }catch(error){
        throw new Error(error);
    }
});

const deleteaUser=asyncHandler(async(req,res)=>{
    const {id}= req.params;
    try{
        const deleteaUser= await User.findByIdAndDelete(id);
        res.json({
            deleteaUser,
        });
    }catch(error){
        throw new Error(error);
    }
});
module.exports={ createUser, loginUserCtrl, getallUser, getaUser, deleteaUser};