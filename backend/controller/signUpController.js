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


module.exports={

    createUser
}