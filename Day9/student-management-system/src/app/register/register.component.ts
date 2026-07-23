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
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])

  });

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  register() {
    if (this.registerForm.valid) {
      this.auth.register(this.registerForm.value).subscribe({
        next: (res) => {
          alert('Registration Successful');
          this.router.navigate(['/login']);
        },

        error: (err) => {
          console.log(err);
          alert('Registration Failed');
        }

      });

    }

  }

}
