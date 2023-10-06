import { Component } from '@angular/core';

@Component({
  selector: 'app-removeticket',
  templateUrl: './removeticket.component.html',
  styleUrls: ['./removeticket.component.css']
})
export class RemoveticketComponent {
  flightId: string = '';

  onCancel() {
    // Handle cancel logic here
    console.log('Cancelled');
  }

  onRemove() {
    // Handle remove logic here
    console.log('Remove flight with ID:', this.flightId);
  }
}
