import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter, switchMap, retry } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(public http: HttpClient, private jwtHelper: JwtHelperService) { }

  submit(form: any) {
    let credentials = form;//JSON.stringify(form.value);
    return this.http.post("api/Auth", credentials);
  }
  getUserLogStatus() {
    const token = localStorage.getItem('jwt');
    console.log('get user logged in -----------');
    console.log(this.jwtHelper.getTokenExpirationDate(token));
    console.log(this.jwtHelper.decodeToken(token).role);
    console.log(this.jwtHelper.decodeToken(token));

    return !this.jwtHelper.isTokenExpired(token);
  }
  getToken() {
    return localStorage.getItem("jwt");
  }
  getrole() {
    let token = localStorage.getItem("jwt");
    return (this.jwtHelper.decodeToken(token)["role"]);
  }

}
