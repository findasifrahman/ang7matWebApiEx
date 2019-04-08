import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CdkTableModule } from '@angular/cdk/table';
import { materialModule } from './materialModule';

import { approuteModule } from './approute.module'
import { ProductmoduleModule } from './adminarea/productmodule/productmodule/productmodule.module';
import { LoginmoduleModule } from './adminarea/loginmodule/loginmodule/loginmodule.module'
import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';
import { commonCompModule } from './commonComp/commonCommModule';

import { ProductsComponent } from './userarea/products/products.component';
import { ServicesComponent } from './userarea/services/services.component';
import { AboutusComponent } from './userarea/aboutus/aboutus.component';
import { ClientsComponent } from './userarea/clients/clients.component';
import { ContactusComponent } from './userarea/contactus/contactus.component';
import { HomeComponent } from './userarea/home/home.component';



import { AppComponent } from './app.component';

import { ConfirmationDialogComponent } from './servicearea/confirmation-dialog/confirmation-dialog.component';

import { AuthGuard } from './auth.guard';

export function tokenGetter() {
  return localStorage.getItem('jwt');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ServicesComponent,
    AboutusComponent,
    ClientsComponent,
    ContactusComponent,
    ConfirmationDialogComponent

  ],
  imports: [
    ProductmoduleModule,
    LoginmoduleModule,
    commonCompModule,

    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    approuteModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    materialModule,
    NgbModule, CdkTableModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:5000'],
        blacklistedRoutes: ['example.com/examplebadroute/']
      }
    })
  ],
  providers: [AuthGuard, JwtModule, JwtHelperService],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmationDialogComponent]
})
export class AppModule { }

