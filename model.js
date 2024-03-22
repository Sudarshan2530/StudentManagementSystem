const mongoose = require('mongoose');

const studentDB = new mongoose.Schema({
    // rollNo :  {type: mongoose.Types.ObjectId, auto: true},
    rollNo : Number,
    name : String,
    address : String,
    age : Number,
    grade : String,
});


const Student = mongoose.model('Student', studentDB);

module.exports = Student;