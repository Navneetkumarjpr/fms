import { Component } from '@angular/core';
import { ServiceService } from "../service/service.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userData:any;
  constructor(private user: ServiceService) {}

  ngOnInit() {
    this.user.currentUserData.subscribe(userData => (this.userData = userData));
  }

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
