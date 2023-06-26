import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm= new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    password: new FormControl('')
  });
  // constructor (private router:Router) {}

  signupUser() {
    console.log(this.signupForm.value)

    // this.router.navigate(['/signup']);
  }
}
