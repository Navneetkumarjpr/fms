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
    console.log("hello ",data);
    this.http.get(`http://localhost:3000/signup?email=${data.userEmail}&password=${data.userPassword}`,{observe:'response'}).subscribe((result)=>{
      this.isUserLoggedIn.next(true);
      localStorage.setItem('userlogin',JSON.stringify(result.body))
      this.router.navigate(['welcomeuser'])  
    });
  }

  setlogin(){
    if(localStorage.getItem('userlogin')){
     return true;
    } 
    return false;
  }
}
