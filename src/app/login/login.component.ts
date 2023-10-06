import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from "../service/service.service";
import { UserLoginDetails } from './model/User';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  userData:any;
  @Input() user:UserLoginDetails;
  constructor() {
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
  // login(data) {
  //   this.user.changeData(data);
  // }
  // changeData(){

  // }
  // login(){

  // }
}
