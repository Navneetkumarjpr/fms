import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {HttpClient} from '@angular/common/http'
// import { User } from '../signup/model';
import { Router } from '@angular/router';
import { UserLoginDetails } from 'src/app/login/model/User';
import { HeaderComponent } from 'src/app/header/header.component';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // currentUserData = this.userDataSource.asObservable();
  constructor(private http:HttpClient,private router:Router) { }
  changeData() {
    // this.userDataSource.next(
  }
isUserLoggedIn=new BehaviorSubject<boolean>(false);
  userLoginUp
  (data:UserLoginDetails){
    this.http.post('http://localhost:3000/login',data,{observe:'response'}).subscribe((result)=>{
      this.isUserLoggedIn.next(true);
      // this.comp.buttonFlag=true;
      console.log("call ",this.isUserLoggedIn.value)
      localStorage.setItem('userlogin',JSON.stringify(result.body))
      this.router.navigate(['welcomeuser'])  
    });
  }
}
