import { Component,Input } from '@angular/core';
import { User } from './model/User';
import { ViewChild, OnInit, AfterViewInit, OnChanges } from '@angular/core';
import { Directive } from "@angular/core";
import {
	Validator,
	ValidationErrors,
	FormGroup,
	NG_VALIDATORS,
	NgForm,
	Validators
} from "@angular/forms";
import { ServiceService } from '../service/service.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements AfterViewInit, OnInit {
  // password1;
	// password2;
	// model = new User(18, '', this.genderType[0], '', '', '123 Fake Street. Seattle, WA 98112');
  @Input()user:User;

  constructor(private usersignup:ServiceService)
  {
    this.user=new User();
  }
  
	submitted = false;

	onSubmit() { this.submitted = true; }
  ngOnInit():void{
    this.usersignup.reloadUser()
  }

  signUp(data:User){
    this.usersignup.userSignUp(data)
  }
 
	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
	}

	init(): void {
		// init code.
	}

	newUser() {
		// this.model = new User(42, '', '', '', '', '');
	}

	// get diagnostic() { return JSON.stringify(this.model); }

}
