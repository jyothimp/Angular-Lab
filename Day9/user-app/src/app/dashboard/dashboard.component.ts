import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

   constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  logout() {
    this.auth.logout().subscribe(() => {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    });

  }

}
