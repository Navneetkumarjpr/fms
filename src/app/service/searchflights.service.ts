import { Injectable } from '@angular/core';
import { booking } from '../welcomeuser/booking';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SearchflightsService {

  constructor(private http:HttpClient, private router:Router) { 

  }
  userbooking(data:booking){
    this.http.post('http://localhost:3000/signup',data,{observe:'response'}).subscribe((result)=>{
      // this.isUserLoggedIn.next(true);
      // localStorage.setItem('user',JSON.stringify(result.body))
      this.router.navigate(['flights'])
    });
  }
}
