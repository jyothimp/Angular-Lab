import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback-parent',
  templateUrl: './feedback-parent.component.html',
  styleUrl: './feedback-parent.component.css'
})
export class FeedbackParentComponent implements OnInit {
   feedback : string = '';
   message : string = '';

  ngOnInit(): void {
    console.log('Parent Component Created');
  }

  receiveMessage(msg: string) {
    this.message = msg;
  }
}
