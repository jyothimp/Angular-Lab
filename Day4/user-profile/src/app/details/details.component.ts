import { Component,OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {

  @Input() userName: string = '';

  @Input() role: string = '';

  ngOnInit(): void {
    console.log('User Details Component Created');
  } 

}
