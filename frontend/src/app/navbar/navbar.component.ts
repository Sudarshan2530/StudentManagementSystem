import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {


  token :any
  
  // logout(token: string) {
  //   localStorage.setItem('token', token);
  // }
  constructor(private router:Router, private http: HttpClient){}
  login(){
    
    this.router.navigate(['/search'])
  }
  register(){
    this.router.navigate(['/update'])
  }
  // logout(){
  //   this.http.post("http://localhost:4001/api/users/logout",token).subscribe((data:any)=>{
  //     alert("Logout Successfull!")
  //     this.router.navigate(['/search'])
  //   },error=>console.log(error))
  // }
  logout() {
    
    const token = localStorage.getItem('token');
    this.http.post("http://localhost:4001/api/users/logout", { token }).subscribe((data:any)=>{
      alert("Logout Successful!")
      localStorage.removeItem('token'); // Remove the token from local storage
      this.router.navigate(['/search'])
    }, error => console.log(error))
  }
}

// export class UniversalNavbar{
//   constructor(private router:Router){}
//   login(){
//     this.router.navigate(['/search'])
//   }
//   logout(){
//     this.router.navigate(['/view'])
//   }
// }

