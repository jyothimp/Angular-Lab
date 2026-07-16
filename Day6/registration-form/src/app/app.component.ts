import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  registerForm!: FormGroup;

  ngOnInit() {
    this.registerForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required])
    });
  }

  get username() {
  return this.registerForm.get('username');
  }

  get password() {
  return this.registerForm.get('password');
  }

  get confirmPassword() {
  return this.registerForm.get('confirmPassword');
  } 

  onSubmit() {

  if (this.password?.value !== this.confirmPassword?.value) {
    alert('Passwords do not match!');
    return;
  }

  alert('Form submitted successfully!');
}
}
