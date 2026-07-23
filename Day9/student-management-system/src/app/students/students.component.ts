import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Student } from '../student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  students: Student[] = [];

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents() {
    this.auth.getStudents().subscribe({
      next: (data) => {
        this.students = data;
      },

      error: (err) => {
        console.log(err);
      }

    });

  }

  logout() {
    this.auth.logout().subscribe({
      next: () => {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      },

      error: () => {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      }

    });

  }

}
