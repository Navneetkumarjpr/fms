import { Injectable } from '@angular/core';
import { booking } from '../welcomeuser/booking';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { searchflight } from '../searchflight/search';

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
    return this.http.get<searchflight[]>('http://localhost:3000/viewallflights');
  }

  getFlight(id: any) {
    return this.http.get<searchflight>(`http://localhost:3000/viewallflights?flightNumber=${id}`);
  }

  updateProduct(product: searchflight) {
    return this.http.put<searchflight>(
      `http://localhost:3000/viewallflights/${product.flightNumber}`,
      product
    );
  }
}
