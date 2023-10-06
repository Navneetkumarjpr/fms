import { Component } from '@angular/core';
import { AddFlight } from '../addflight/addflight';

@Component({
  selector: 'app-updateflight',
  templateUrl: './updateflight.component.html',
  styleUrls: ['./updateflight.component.css']
})
export class UpdateflightComponent {
  flights = new AddFlight
  onSubmit(form: any) {
    if (form.valid) {
      // Handle form submission
      console.log('Form submitted:', form.value);
    }
  }
}