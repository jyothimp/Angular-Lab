import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  user = {
    name: '',
    email: ''
  };

  onSubmit() {
    console.log("Name:", this.user.name);
    console.log("Email:", this.user.email);
  }
}
