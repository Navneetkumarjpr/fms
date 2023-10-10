import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  buttonFlag:boolean=false
  username:string='Hello';
  user:boolean=false;
  admin:boolean=false;

  constructor(private userlog:LoginService, private route:Router){}

  ngOnInit(){
    // this.buttonFlag= this.userlog.isUserLoggedIn.value
    // if(localStorage.getItem('userlogin')?.length){
    //   this.buttonFlag=true;
    // }
    this.buttonFlag=this.userlog.setlogin()
    // this.username=localStorage.getItem('userlogin').username;
    console.log("flag button ",this.buttonFlag)
      // this.user=true;
      // this.admin=true;
      // if(sessionStorage.getItem('role')==='user'){
      //     this.user=true;
      // }else if(sessionStorage.getItem('role')==='admin'){
      //     this.admin=true;
      // }
      // this.buttonFlag=this.authenticationService.isUserLoggedIn();
      // this.username=sessionStorage.getItem('username');
      // if(this.username!=null)
      //     this.username=this.username.toUpperCase();
  }

  logout(){
    if(localStorage.getItem('userlogin')){
      localStorage.removeItem('userlogin')
      console.log("first ",this.buttonFlag)
      this.buttonFlag=false
      console.log("second ",this.buttonFlag)
      this.route.navigate(['login'])
      // window.location.reload()
    }
  }

}
