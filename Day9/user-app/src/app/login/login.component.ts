import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

loginForm = new FormGroup({

    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  login() {
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe((result: any) => {
        localStorage.setItem('token', result.token);
        alert("Login Successful");
        this.router.navigate(['/dashboard']);
      });

    }

  }

}

