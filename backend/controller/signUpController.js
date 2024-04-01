const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const User=require('../model/signupModel');
const jwt=require("jsonwebtoken")


const createUser=asyncHandler(async(req,res)=>
{
    const{name,email,password}=req.body;
    if(!name|| !email || !password)
    {
        res.status(400);
        throw new Error("All fields are Mandatory!")
    }
    const avilableUser=await User.findOne({email});
    if(avilableUser)
    {
        res.status(400);
        throw new Error("User already registered");
    }
    const hashedPassword=await bcrypt.hash(password,8);
    console.log("Hashed Password:",hashedPassword);
    const user=await User.create({
        name,
        email,
        password:hashedPassword
    });
    if(user)
    {
        res.status(201).json({_id:user.id, email: user.email});
    }
    else
    {
        res.status(400);
        throw new Error("User data is not valid!!!");
    }
})

const loginUser=asyncHandler(async(req,res)=>{
    // console.log("Enter in login user function!!");
    const{email,password}=req.body;
    console.log(req.body);
    if(!email || !password)
    {
        res.status(400);
        throw new Error("All fields are mandatory!")
    }
    const user=await User.findOne({email});
    console.log(user);
    if(user &&(await bcrypt.compare(password, user.password)))
    {
        const accessToken=jwt.sign({id:user._id,name:user.name,email:user.email},"rohit", {expiresIn: '5M'});
        res.status(201).send({mes:"User Login SuccessFully!!",token:accessToken})
    }
    else{
        res.status(400).send({mes:"User not found"});
    }
})
const logoutUser = asyncHandler(async (req, res) => 
{
    const token = null;

    res.status(200).send({mes: "User Logged Out Successfully!!", token});
})

const currentUser= asyncHandler(async(req,res)=>
{
    res.json(req.user);
})


module.exports={

    createUser,
    loginUser,
    currentUser,
    logoutUser
};