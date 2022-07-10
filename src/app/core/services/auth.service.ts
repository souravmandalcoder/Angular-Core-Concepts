import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
    const token = localStorage.getItem('token');
    if (req.url.includes('localhost://4600')) {
      return next.handle(req);
    }
    req = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + token
      }
    })
    return next.handle(req);
  }


  constructor() { }
}
