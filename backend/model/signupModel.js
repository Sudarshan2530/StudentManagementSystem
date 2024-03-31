const mongoose = require('mongoose');


const signupDB = new mongoose.Schema({

   name:{
    type:  String,
    required : true
   },
   email:{
    type : String,
    required : true,
    unique : true,
   },
   password: {
    type :String,
    required: true
   },
   // timestamps: true,
});

const signUp = mongoose.model('signUp', signupDB);
// module.exports = mongoose.model("User",userSchema);
module.exports = signUp;