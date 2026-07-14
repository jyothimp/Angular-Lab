import { Component,OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-feedback-child',
  templateUrl: './feedback-child.component.html',
  styleUrl: './feedback-child.component.css'
})
export class FeedbackChildComponent implements OnInit {

  @Input() feedback : string = '';

  @Output() confirmation = new EventEmitter<string>();

  ngOnInit(): void {
    console.log('Child Component Created');
  }

  sendConfirmation() {
    this.confirmation.emit('Feedback received!');
  } 

}
