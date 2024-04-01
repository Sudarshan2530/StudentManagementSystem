import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private router:Router, private http: HttpClient){}
  login(){
    this.router.navigate(['/search'])
  }
  register(){
    this.router.navigate(['/update'])
  }
  logout(){
    this.http.get("http://localhost:4001/api/users/logout").subscribe((data:any)=>{
      alert("Logout Successfull!")
      this.router.navigate(['/search'])
    },error=>console.log(error))
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

