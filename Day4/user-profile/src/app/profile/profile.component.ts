import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  userName: string = 'Vipin';
  role: string = 'admin';

  ngOnInit(): void {
    console.log('User Profile Component Created');
  } 

}
