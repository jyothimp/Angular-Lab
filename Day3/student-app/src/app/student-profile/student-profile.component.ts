import { Component } from '@angular/core';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})

export class StudentProfileComponent {
   message: string = 'Welcome Jyothi!!';
   imagepath: string = 'assets/JyothiJohn.jpg';
   onClick(): void {
        alert('Profile viewed!');
      }
   subject:string ='';
}
