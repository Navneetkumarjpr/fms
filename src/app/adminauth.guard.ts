import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CanActivateFn } from '@angular/router';
import { ServiceService } from './service/service.service';
import { Observable } from 'rxjs';
import { LoginService } from './service/login/login.service';
import { AdminloginService } from './service/adminlogin.service';

@Injectable({
  providedIn:'root'
})
export class AuthGuard implements CanActivate{
  constructor(private userservice:LoginService, private adminservice:AdminloginService){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(localStorage.getItem('userlogin')){
      return true;
    }
    if(localStorage.getItem('adminlogin')){
      return true;
    }
    return this.userservice.isUserLoggedIn || this.adminservice.isAdminLoggedIn;
  }
}