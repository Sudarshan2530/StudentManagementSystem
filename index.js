// console.log("This is crud operation for student managment system")

const Student = require('./model')
const router =require("./backend/routes/userRoutes")
const connectDB=require("./backend/config/db")
//adding express module
const express = require("express");
const cors = require('cors');

//setting up connection with MongoDB compass
connectDB();

// const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://sudarshan:AFrECGQFWYq58ThL@studentmanagement.v54lnhl.mongodb.net/?retryWrites=true&w=majority&appname=studentManagement', {useNewUrlParser: true, useUnifiedTopology: true})
// .then(() => console.log('Connected to MongoDB...'))
// .catch(err => console.error('Could not connect to MongoDB...', err))

//initializing express server

const app = express();


//to handle the json data
app.use(express.json());

//enabling cors origin on server
app.use(cors());
app.use("/api/users/",router);//adding for router purpose

//defining port for the server
const port = 4001;

//fetching student details
app.get("/studentDetails",async (req, res)=>{
const students = await Student.find();
res.send(students);
});

//fetching student details by id
app.get("/studentDetail/:rollNo", async(req, res)=>{
try{
const student = await Student.findById(req.params.rollNo);
if(!student){
return res.status(401).json({message: 'student not found'});
}
res.json(student);
}
catch (err){
res.status(500).json({message: err.message});
}
});

//adding student details
app.post('/createStudent', async (req, res) => {

// this.app.get();
//counting the total number of entries in database.
// count = await Student.countDocuments();
let rollNo = 1;
while (await Student.exists({ rollNo: rollNo })) {
rollNo++;
}
const students = new Student({ 
rollNo: rollNo,
name: req.body.name,
address: req.body.address, 
age: req.body.age, 
grade: req.body.grade 
});

try{
const newStudent = await students.save();
res.status(201).json({message:'Student data created'});
}
catch(err){
res.status(400).json({message: err.message});
}
});

//updating student details by id
app.put('/updateStudent/:rollNo', async (req, res)=>{
try{
const student = await Student.findById(req.params.rollNo);
if(!student){
return res.status(404).json({message: 'Student not found'});
}

student.rollNo = req.body.rollNo 
student.name = req.body.name
student.address = req.body.address
student.age = req.body.age
student.grade = req.body.grade 

const updateStudent = await student.save();
// console.log("Student data has been updated successfully!!");
res.json({message:'Student data has been updated Successfully!!'});
}
catch(err){
res.status(400).json({message: err.message});
}
});

//removing student details by id
app.delete('/deleteStudent/:rollNo',async(req,res)=>{
// const count = await Student.countDocuments();
try{

const student = await Student.findByIdAndDelete(req.params.rollNo)
if(!student){
return res.status(404).json({message: "student data not found"});
}

res.json({message: 'Student data removed'});
}
catch(err){
res.status(500).json({message: err.message});
}
});

app.listen(port, ()=>{
console.log(`Server is running on ${port}`)
});



