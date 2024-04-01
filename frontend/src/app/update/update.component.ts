import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { error } from 'console';
import { Router } from '@angular/router';

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


  constructor(private http: HttpClient, private router:Router)
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

    this.http.post('http://localhost:4001/api/users/register', userData)
    .subscribe((response:any)=>
    {
      console.log("You have registered successfully!!", response)
      alert("Registration has been completed")
      this.router.navigate(['/search']);
    },
    error=> {
      console.log("Please fill details ", error);
      
      alert("Please fill all the details")
    })
  }
}
