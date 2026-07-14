import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
   products = [
    { name: 'Bluetooth Earphone', price: 750, onSale: true },
    { name: 'Phone Cover', price: 200, onSale: false },
    { name: 'Power Cable', price: 1800, onSale: true }
  ];
}
