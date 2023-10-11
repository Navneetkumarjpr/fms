import { Component, Input } from '@angular/core';
import { AddFlight } from './addflight';
import { FlightModel } from '../model/flightModel';
import { SearchflightsService } from '../service/searchflights.service';

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
  flights = new FlightModel()
  addProductMessage: string | undefined;
  constructor(private product: SearchflightsService) {}

  ngOnInit(): void {}

  onSubmit(data: FlightModel) {
    this.product.addFlight(data).subscribe((result) => {
      console.warn("res ",result);
      if (result) {
        this.addProductMessage = 'Product is added successfully';
      }
    });

    setTimeout(() => {
      this.addProductMessage=undefined
    }, 3000);
  }
}
