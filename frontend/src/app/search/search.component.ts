import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  email: any;
  password: any;

  // public baseUrl='http://localhost:4001';


  constructor(private http: HttpClient, private router: Router) {}

  login() {
    const userData = { email: this.email, password: this.password };

    this.http.post<any>('http://localhost:4001/api/users/login', userData)
      .subscribe(
        response => {
          localStorage.setItem('token', response.token);
          // this.router.navigate(['/dashboard']); // Redirect to dashboard or any other route after successful login
          console.log("Login Successful")
          alert("Login Successful")
          this.router.navigate(['/view']);
        },
        error => {
          console.error('Error logging in:', error);
          alert("Login failed, please Try again!!")
          // Handle error, e.g., display error message
        }
      );
  }
}