import { Injectable } from '@angular/core';
import { booking } from '../welcomeuser/booking';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { searchflight } from '../searchflight/search';
import { FlightModel } from '../model/flightModel';

@Injectable({
  providedIn: 'root'
})
export class SearchflightsService {

  constructor(private http:HttpClient, private router:Router) { 

  }
  userbooking(data:booking){
    this.http.post('http://localhost:3000/flights',data,{observe:'response'}).subscribe((result)=>{
      // this.isUserLoggedIn.next(true);
      // localStorage.setItem('user',JSON.stringify(result.body))
      this.router.navigate(['flights'])
    });
  }
  flightList() {
    return this.http.get<FlightModel[]>('http://localhost:3000/viewallflights');
  }

  getFlight(id: any) {
    return this.http.get<FlightModel[]>(`http://localhost:3000/viewallflights?flightNumber=${id}`);
  }

  updateProduct(product: any) {
    console.log(product.id);
    
    return this.http.put<any>(
      `http://localhost:3000/viewallflights/${product.flightNumber}`,
      product
    );
  }

  addFlight(data: FlightModel) {
    console.log("add ",data)
    return this.http.post('http://localhost:3000/viewallflights', data,{observe:'response'});
  }
}
