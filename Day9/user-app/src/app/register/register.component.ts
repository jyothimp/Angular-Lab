import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

   registerForm = new FormGroup({

    user_name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  register() {
   this.auth.register(this.registerForm.value).subscribe({
   next: (res) => {
   console.log("Success:", res);
    alert("Registration Successful");
    this.router.navigate(['/login']);
  },

  error: (err) => {
    console.log("Error:", err);
    console.log("Status:", err.status);
    console.log("Response:", err.error);
    alert("Registration Failed");
  }

});

  }
}