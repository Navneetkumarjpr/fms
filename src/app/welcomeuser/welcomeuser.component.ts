import { Component } from '@angular/core';
import { booking } from './booking';
import { Router } from '@angular/router';
import { SearchflightsService } from '../service/searchflights.service';


@Component({
  selector: 'app-welcomeuser',
  templateUrl: './welcomeuser.component.html',
  styleUrls: ['./welcomeuser.component.css']
})
export class WelcomeuserComponent {
  constructor(private router:Router, private searchflights:SearchflightsService){

  }
  bookFlight = new booking()
  onSubmit(form: booking) {
    // if (form.valid) {
      // Handle form submission
      // console.log('Form submitted:', form);
      this.searchflights.userbooking(form);
    // }
  }
}
