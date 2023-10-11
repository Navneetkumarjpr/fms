import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
import { AdminLoginDetails } from '../adminlogin/admin';
@Injectable({
  providedIn: 'root'
})
export class AdminloginService {
  constructor(private http:HttpClient,private router:Router) { }
  changeData() {
    // this.userDataSource.next(
  }
isAdminLoggedIn=new BehaviorSubject<boolean>(false);
invalidAdminAuth= new EventEmitter<boolean>(false)
   adminLogIn
  (data:AdminLoginDetails){
    console.log("hello ",data);
     this.http.get(`http://localhost:3000/admin?email=${data.userEmail}&pass=${data.userPassword}`,{observe:'response'}).subscribe((result:any)=>{
      // console.log(result);
      // if(result && result.id)
      // {
      //   this.isUserLoggedIn.next(true);
      //   localStorage.setItem('userlogin',JSON.stringify(result.body))
      //   this.router.navigate(['welcomeuser'])  
      // }else{

      // }
      console.log(result)
      if(result && result.body.length>=1){
        localStorage.setItem('adminlogin',JSON.stringify(result.body));
        this.isAdminLoggedIn.next(true);
        this.router.navigate(['dashboard']);
        this.invalidAdminAuth.emit(false)
      }else{
        this.invalidAdminAuth.emit(true)
      }
    });
  }

  setlogin(){
    if(localStorage.getItem('adminlogin')){
     return true;
    } 
    return false;
  }
}
