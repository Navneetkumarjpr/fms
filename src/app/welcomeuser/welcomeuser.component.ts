import { Component } from '@angular/core';
import { booking } from './booking';


@Component({
  selector: 'app-welcomeuser',
  templateUrl: './welcomeuser.component.html',
  styleUrls: ['./welcomeuser.component.css']
})
export class WelcomeuserComponent {
  constructor(){
    
  }
  bookFlight = new booking()
  onSubmit(form: booking) {
    // if (form.valid) {
      // Handle form submission
      console.log('Form submitted:', form);
    // }
  }
}
