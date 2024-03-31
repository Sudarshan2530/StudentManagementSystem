
// let {Router} =required("express");
// let {createUser} = require("../controller/signUpController")
// let userRouter=Router();

// userRouter.post("/register",createUser);
// userRouter.get("/getuser",getuser);


// module.exports=userRouter 
const express=require('express');
const {createUser, loginUser}=require('../controller/signUpController');


const router=express.Router();

router.post("/register",createUser);
router.post("/login",loginUser);



module.exports=router;