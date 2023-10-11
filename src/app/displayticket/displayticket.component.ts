import { Component, Input } from '@angular/core';
import { User } from '../signup/model/User';
import { DisplayTicket } from './displayTicket';

@Component({
  selector: 'app-displayticket',
  templateUrl: './displayticket.component.html',
  styleUrls: ['./displayticket.component.css']
})
export class DisplayticketComponent {

  userDetails:DisplayTicket[]=[
    {
      userName:"Amit",
      seatNo:"29A",
      origin:"New Delhi",
      destination:"Mumbai"
    }
  ]

}
