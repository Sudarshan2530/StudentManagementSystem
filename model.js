const mongoose = require('mongoose');

const studentManagement = new mongoose.Schema({
    RollNo : Number,
    Name : String,
    Address : String,
    Age : Number,
    Class : String,
});


const Student = mongoose.model('Student', studentManagement);

module.exports = Student;