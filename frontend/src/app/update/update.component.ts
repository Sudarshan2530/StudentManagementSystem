import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { error } from 'console';
import { response } from 'express';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
  // onSubmit(data:any){
  //   console.log(data);
  // }
  name:any;
  email:any;
  password:any;


  constructor(private http: HttpClient)
  {

  }


  registerUser()
  {
    const userData = 
    {
      name: this.name,
      email: this.email,
      password:this.password,
    }

    this.http.post('http://localhost:4201/update', userData.email)
    .subscribe((response:any)=>
    {
      console.log("You have registered successfully!!", response)
    },
    error=> {
      console.log("Please fill details ", error);
  
    })
  }
}
