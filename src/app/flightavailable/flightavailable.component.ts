import { Component,Input } from '@angular/core';
import { searchflight } from '../searchflight/search';
import{FlightAvailable} from '../flightavailable/flightResults'
import { Router } from '@angular/router';

@Component({
  selector: 'app-flightavailable',
  templateUrl: './flightavailable.component.html',
  styleUrls: ['./flightavailable.component.css']
})
export class FlightavailableComponent {
  @Input() searchResults =new searchflight();

  flightresult:FlightAvailable[]=[
    {
      flightId:1,
      flightName:"Akasa Air",
    originTime: new Date('11-Nov-2023'),
    timeTaken:"2 hr 20 min",
    destinationTime:new Date('11-Nov-2023'),
    Price:5000
    },
    {
      flightId:2,
      flightName:"Air India",
    originTime: new Date('11-Nov-2023'),
    timeTaken:"1 hr 45 min",
    destinationTime:new Date('11-Nov-2023'),
    Price:6400
    },
    {
      flightId:3,
      flightName:"Vistara",
    originTime: new Date('11-Nov-2023'),
    timeTaken:"4 hr 20 min",
    destinationTime:new Date('11-Nov-2023'),
    Price:2500
    },
    {
      flightId:4,
      flightName:"Indigo",
    originTime: new Date('11-Nov-2023'),
    timeTaken:"2 hr ",
    destinationTime:new Date('11-Nov-2023'),
    Price:5500
    }
  ]
  constructor(private router:Router){

  }
  ViewDetails(data:number)
  {
   this.router.navigate([`flightbooking/${data}`]) 
  }

}
