import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { User } from '../signup/model/User';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private userDataSource = new BehaviorSubject({email : '', password : ''});
  currentUserData = this.userDataSource.asObservable();
  constructor(private http:HttpClient,private router:Router) { }
  changeData() {
    // this.userDataSource.next(
  }
isUserLoggedIn=new BehaviorSubject<boolean>(false);
  userSignUp(data:User){
    this.http.post('http://localhost:3000/signup',data,{observe:'response'}).subscribe((result)=>{
      this.isUserLoggedIn.next(true);
      localStorage.setItem('userlogin',JSON.stringify(result.body))
      this.router.navigate(['welcomeuser'])
    });
  }
  reloadUser(){
    if(localStorage.getItem('userlogin')){
      this.isUserLoggedIn.next(true);
      this.router.navigate(['welcomeuser'])
    }
  }


}
