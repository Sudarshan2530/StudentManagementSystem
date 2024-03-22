// console.log("This is crud operation for student managment system")

const Student = require('./model')
//adding express module
const express = require("express");

//setting up connection with MongoDB compass
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sudarshan:AFrECGQFWYq58ThL@studentmanagement.v54lnhl.mongodb.net/?retryWrites=true&w=majority&appname=studentManagement', {useNewUrlParser: true, useUnifiedTopology: true})
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
    let students = new Student({ 
        rollNo: req.body.rollNo, 
        name: req.body.name, 
        address: req.body.address, 
        age: req.body.age, 
        grade: req.body.grade 
    });

    students = await students.save();
    res.send(students);
  });

  //this logic/code should be in server.js file
app.post('/createStudent', (req, res)=>{
    const{rollNo, name, address, age, grade} = req.body;

    if(!rollNo || !name || !address || !age || !grade){
        return res.status(400).send('Missing Student details, Please try again');
        
    }
    
    let newStudent = {rollNo, name, address, age, grade};
    
    students.push(newStudent);
    res.status(201).send(students);
});
//controller
app.get('/studentDetail/:rollNo', (req, res)=>{
let student = students.find(st => st.rollNo === parseInt(req.params.rollNo));

if(!student){
    return res.status(404).send('Student data not found');
}
res.json(student);
});


app.get('studentDetail/:rollNo', async(req, res)=>{
     const student = await Student.findById(req.params.rollNo);
    if(!student)
    return res.status(404).send('Student not found');

    return res.send(student);
});


app.listen(port, ()=>{
console.log(`Server is running on ${port}`)
});



