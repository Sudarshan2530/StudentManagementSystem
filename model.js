const mongoose = require('mongoose');
// const autoIncrement = require("mongoose-auto-increment");

const studentDB = new mongoose.Schema({
    // rollNo :  {type: mongoose.Types.ObjectId, auto: true},
    rollNo : Number,
    name : String,
    address : String,
    age : Number,
    grade : String,
});

// autoIncrement.initialize(mongoose.connection);

// studentDB.plugin(autoIncrement.plugin, {
//     model: "Student",
//     field: "rollNo",
//     startAt: 1,
//     incrementBy: 1,
// });
const Student = mongoose.model('Student', studentDB);

module.exports = Student;