import { AdminLoginDetails } from './admin';
import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from "../service/service.service";
import { BehaviorSubject } from 'rxjs';
import { LoginService } from '../service/login/login.service';
import { Router } from '@angular/router';
import { AdminloginService } from '../service/adminlogin.service';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  userData:any;
  @Input() user:AdminLoginDetails;
  authError:String='';
  isUserLoggedIn=new BehaviorSubject<boolean>(false);
  constructor(private userlogin:AdminloginService, private router:Router) {
    this.user=new AdminLoginDetails();
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
  login(data:AdminLoginDetails) {
    this.userlogin.adminLogIn(data)
    this.userlogin.invalidAdminAuth.subscribe((isError)=>{
      if(isError){
        this.authError="Email or password is not correct";
      }
    });

    setTimeout(() => {
      this.authError=""
    }, 3000);
  }
}
