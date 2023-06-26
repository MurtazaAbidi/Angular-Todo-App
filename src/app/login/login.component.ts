import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm= new FormGroup({
    name: new FormControl(''),
    password: new FormControl('')
  });
  constructor (private router:Router) {}

  loginUser() {
    console.log(this.loginForm.value)

    this.router.navigate(['/home']);
  }
}
