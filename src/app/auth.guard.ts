import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CanActivateFn } from '@angular/router';
import { ServiceService } from './service/service.service';
import { Observable } from 'rxjs';
import { LoginService } from './service/login/login.service';

// export const authGuard: CanActivateFn = (route, state) => {
  
//   return true;
// }; 

@Injectable({
  providedIn:'root'
})
export class AuthGuard implements CanActivate{
  constructor(private userservice:LoginService){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(localStorage.getItem('user')){
      return true;
    }
    return this.userservice.isUserLoggedIn;
  }
}