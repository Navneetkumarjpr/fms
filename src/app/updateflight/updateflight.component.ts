import { Component } from '@angular/core';
import { AddFlight } from '../addflight/addflight';
import { updateflight } from './updateflight';
import { ActivatedRoute } from '@angular/router';
import { SearchflightsService } from '../service/searchflights.service';
import { searchflight } from '../searchflight/search';

@Component({
  selector: 'app-updateflight',
  templateUrl: './updateflight.component.html',
  styleUrls: ['./updateflight.component.css']
})
export class UpdateflightComponent {
  // flights=new AddFlight;
  flights:undefined | searchflight
  flightMessage: undefined | string;
  constructor(private route: ActivatedRoute, private product: SearchflightsService) {}

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id');
    console.log("id one",productId);
    productId &&
      this.product.getFlight(productId).subscribe((data) => {
        console.log("get one",data.flightNumber);
        this.flights= data
      });
  }
    
  onSubmit(data: any) {
    if (this.flights) {
      data.id = this.flights.flightNumber;
    }
    this.product.updateProduct(data).subscribe((result) => {
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
