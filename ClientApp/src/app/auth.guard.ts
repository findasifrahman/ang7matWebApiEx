import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable, from } from 'rxjs';
import { LoginserviceService } from "./adminarea/loginmodule/loginservice.service";
import { MatSnackBar } from '@angular/material';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  constructor(private snackBar: MatSnackBar,private logService: LoginserviceService) { }
    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (!this.logService.getUserLogStatus()) {
        this.snackBar.open('You are not authorized To view this page', "Remove", {
          duration: 6000,
          verticalPosition: 'top',
          panelClass: ['red-snackbar']
        });
      }
      return this.logService.getUserLogStatus();
    }
}
