import { Injectable } from '@angular/core';
import {
  CanActivate, CanActivateChild, CanLoad, Route, UrlSegment,
  ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,
  CanDeactivate
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    console.log(route, segments);

    return true;
  }

  canDeactivate() {
    return confirm("do you wish to continue");
  }
}

