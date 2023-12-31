import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from "../service/service.service";
import { BehaviorSubject } from 'rxjs';
import { UserLoginDetails } from './model/User';
import { LoginService } from '../service/login/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  userData:any;
  @Input() user:UserLoginDetails;
  authError:String='';
  isUserLoggedIn=new BehaviorSubject<boolean>(false);
  constructor(private userlogin:LoginService, private router:Router) {
    this.user=new UserLoginDetails();
  }
  submitted:boolean=false;

  submit()
  {
    this.submitted=!this.submitted
  }
  // ngOnInit() {
  //   this.user.currentUserData.subscribe(userData => (this.userData = userData));
  // }

  // changeData(event) {
  //   var msg = event.target.value;
  //   this.user.changeData(msg);
  // }
  login(data:UserLoginDetails) {
    this.userlogin.userLoginUp(data)
    this.userlogin.invalidUserAuth.subscribe((isError)=>{
      if(isError){
        this.authError="Email or password is not correct";
      }
    });

    setTimeout(() => {
      this.authError=""
    }, 3000);
  }
  // changeData(){

  // }
  // login(){

  // }
}
