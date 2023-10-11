import { Component } from '@angular/core';
import { AddFlight } from '../addflight/addflight';
import { updateflight } from './updateflight';
import { ActivatedRoute } from '@angular/router';
import { SearchflightsService } from '../service/searchflights.service';
import { searchflight } from '../searchflight/search';
import { FlightModel } from '../model/flightModel';

@Component({
  selector: 'app-updateflight',
  templateUrl: './updateflight.component.html',
  styleUrls: ['./updateflight.component.css']
})
export class UpdateflightComponent {
  // flights=new AddFlight;
  flights:FlightModel | undefined
  flightMessage: undefined | string;
  constructor(private route: ActivatedRoute, private product: SearchflightsService) {}

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id');
    console.log("id one",productId);
    productId &&
      this.product.getFlight(productId).subscribe((data: FlightModel[]) => {
        console.log("get one",data[0]);
        this.flights=data[0];
        // this.flights.departureDate=new Date(this.flights.departureDate,'yyyy-MM-dd')
        
        console.log(this.flights.flightNumber)
      });
  }
    
  onSubmit(data: FlightModel) {
    if (this.flights) {
      data.flightNumber = this.flights.flightNumber;
    }
    this.product.updateProduct(data).subscribe((result) => {
      console.log("update ",result)
      if (result) {
        this.flightMessage = 'Product has updated';
      }
    });
    setTimeout(() => {
      this.flightMessage = undefined;
    }, 3000);
    console.warn(data);
  }
}
