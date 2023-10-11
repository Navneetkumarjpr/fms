import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from "../service/service.service";
import { UserLoginDetails } from './model/User';
import { LoginService } from '../service/login/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  userData:any;
  @Input() user:UserLoginDetails;
  constructor(private userlogin:LoginService) {
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
    // if(data.userEmail.length!=0 )
    console.log("hllo")
    this.userlogin.userLoginUp(data);
  }
  // changeData(){

  // }
  // login(){

  // }
}
