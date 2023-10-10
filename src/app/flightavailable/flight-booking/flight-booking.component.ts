import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { DisplayticketComponent } from 'src/app/displayticket/displayticket.component';
import { User } from 'src/app/signup/model/User';

@Component({
  selector: 'app-flight-booking',
  templateUrl: './flight-booking.component.html',
  styleUrls: ['./flight-booking.component.css']
})
export class FlightBookingComponent {
  @Input()user1:User;
  constructor(private activateroute:ActivatedRoute,private _router:Router){
//     this.route.params.subscribe((param)=>{
// console.log(param)
//     }) 
   console.log( this.activateroute.snapshot.paramMap.get('id'));
   this.user1=new User();
  }
  

  onSubmit(form: any) {
    if (form.valid) {
      // Handle form submission
      console.log('Form submitted:', form.value);
    }
  }
  openModel()
  {
    const modeldiv= document.getElementById('myModal');
    if(modeldiv!=null)
    {
      modeldiv.style.display='block'
    }
  }

  closeModel()
  {
    const modeldiv= document.getElementById('myModal');
    if(modeldiv!=null)
    {
      modeldiv.style.display='none'
    }
  }
 
  showTicket()
  {
    this._router.navigate([`displayticket`]);
    
  }
}
