// console.log("This is crud operation for student managment system")

const Student = require('./model')
//adding express module
const express = require("express");

//setting up connection with MongoDB compass
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sudarshan:AFrECGQFWYq58ThL@studentmanagement.v54lnhl.mongodb.net/?retryWrites=true&w=majority&appName=studentManagement', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...', err))


//initializing express server
const app = express();

//to handle the json data
app.use(express.json());

//defining port for the server
const port = 4001;

let students=[];

// app.get("/studentDetails", (req, res)=>{
//     res.send("Showing all the student's data in tabular form.");
// });

//getting student details
// app.get("/studentDetails", (req, res)=>{
//     res.json(students);
// });


app.get("/studentDetails",async (req, res)=>{
    const students = await Student.find();
    res.send(students);
});


//controller file should be created for this.
//adding student details
app.post('/createStudent', async (req, res) => {
    let student = new Student({ 
        RollNo: req.body.RollNo, 
        Name: req.body.Name, 
        Address: req.body.Address, 
        Age: req.body.Age, 
        Class: req.body.Class 
    });

    student = await students.save();
    res.send(students);
  });

  //this logic/code should be in server.js file
app.post('/createStudent', (req, res)=>{
    const{RollNo, Name, Address, Age, Class} = req.body;

    if(!RollNo || !Name || !Address || !Age || !Class){
        return res.status(400).send('Missing Student details, Please try again');

    }

    const newStudent = {RollNo, Name, Address, Age, Class};
    students.push(newStudent);
    res.status(201).send(newStudent);
});

// app.get('/studentDetail/:RollNo', (req, res)=>{
// const student = student.find(st => st.RollNo === parseInt(req.params.RollNo));

// if(!student){
//     return res.status(404).send('Student data not found');
// }
// res.json(student);
// });


app.listen(port, ()=>{
console.log(`Server is running on ${port}`)
});



