import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {

  StudentArray : any[] = [];
  currentStudentID = "";
  name: any
  address: any
  phone: any
  rollNo:any
  grade:any
  age:any
  public baseUrl='http://localhost:4001';
  vali:any
  
  constructor(private http: HttpClient ) 
  {
    // this.getAllStudent();
  }
  ngOnInit()
  {
    this.getAllStudent();

  }
  getAllStudent()
  {
    this.http.get(`${this.baseUrl}/studentDetails`).subscribe((data:any)=>{
      this.StudentArray=data;
    },error=>console.log(error))
  }
  setUpdate(data: any) 
  {
   this.name = data.name;
   this.address = data.address;
   this.rollNo = data.rollNo;
   this.age=data.age;
   this.grade=data.grade;
   this.currentStudentID = data._id;
  
  }
  UpdateRecords()
  {
    let bodyData = {
      "name" : this.name,
      "address" : this.address,
      "rollNo" : this.rollNo,
      "age":this.age,
      "grade":this.grade,
    };
    
    this.http.put("http://localhost:4001/updateStudent"+ "/"+this.currentStudentID,bodyData).subscribe((resultData: any)=>
    {
      console.log("hello");
        console.log("Updated"+resultData);
        alert("Student Updateddd")
        this.getAllStudent();
      
    });
    // this.http.put("http://localhost:4001/deleteStudent"+"/"+this.currentStudentID,bodyData).subscribe((response:any)=>{
    //   console.log(response);
    //   this.name = '';
    //   this.address = '';
    //   this.phone  = '';
    //   this.getAllStudent();
    // })
  }
  
  setDelete(data:any)
  {

    this.http.delete("http://localhost:4001/deleteStudent"+"/"+data._id,{responseType:'text'}).subscribe((response:any)=>{
      console.log("Delete"+response);
      alert("Deleted Student!!")
      this.getAllStudent();
    })

  }
    
  save()
  {
    if(this.currentStudentID == '')
    {
        this.register();
         alert("Student Registered Successfully")
         this.getAllStudent();
        //  this.StudentArray.res
    }
      else
      {
       this.UpdateRecords();
      }       
  }
  
register()
  {
    let bodyData = {
      "name" : this.name,
      "address" : this.address,
      "rollNo" : this.rollNo, 
      "grade":this.grade,
      "age":this.age
  };
    this.http.post("http://localhost:4001/createStudent",bodyData).subscribe((resultData: any)=>
    {
        console.log("Created Student!!"+resultData);
       
       
        this.getAllStudent();
        
    });
  }
  // onSearch(data:any)
  // {
  //   console.log(data);

  //   this.http.get("http://localhost:4001/studentDetail"+"/"+data._id,{responseType:'text'}).subscribe((response:any)=>{
  //     console.log("search"+response);
  //     console.log(this.name); 
  //     alert("search Student!!")
  //     this.getAllStudent();
  //   })

  // }


}
