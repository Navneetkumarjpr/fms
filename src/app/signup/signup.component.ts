import { Component,Input } from '@angular/core';
import { User } from './model/User';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  @Input()user:User;

  constructor()
  {
    this.user=new User();
  }

}
