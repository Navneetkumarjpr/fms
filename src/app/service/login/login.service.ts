import { Injectable, EventEmitter } from '@angular/core';
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
invalidUserAuth= new EventEmitter<boolean>(false)
  userLoginUp
  (data:UserLoginDetails){
    console.log("hello ",data);
     this.http.get(`http://localhost:3000/signup?email=${data.userEmail}&pass=${data.userPassword}`, {observe:'response'}).subscribe((result:any)=>{
      // console.log(result);
      // if(result && result.id)
      // {
      //   this.isUserLoggedIn.next(true);
      //   localStorage.setItem('userlogin',JSON.stringify(result.body))
      //   this.router.navigate(['welcomeuser'])  
      // }else{

      // }
      console.log("res => ",result)
      if(result && result.body.length>=1 ){
        localStorage.setItem('userlogin',JSON.stringify(result.body));
        this.isUserLoggedIn.next(true);
        this.router.navigate(['/welcomeuser']);
        this.invalidUserAuth.emit(false)
      }else{
        this.invalidUserAuth.emit(true)
      }
    });
  }

  setlogin(){
    if(localStorage.getItem('userlogin')){
     return true;
    } 
    return false;
  }
}
