import { Component, Input } from '@angular/core';
import { AddFlight } from './addflight';

@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.css']
})
export class AddflightComponent {
  // @Input() flights:AddFlight 
  // constructor(){
  //   this.flights=new AddFlight()
  // }
  flights = new AddFlight()
  onSubmit(form: any) {
    if (form.valid) {
      // Handle form submission
      console.log('Form submitted:', form.value);
    }
  }
}
