import { Component } from '@angular/core';
import { searchflight } from './search';

@Component({
  selector: 'app-searchflight',
  templateUrl: './searchflight.component.html',
  styleUrls: ['./searchflight.component.css']
})
export class SearchflightComponent {
  searchflights = new searchflight()
  onSubmit(form: any) {
    if (form.valid) {
      // Handle form submission
      console.log('Form submitted:', form.value);
    }
  }
}
 