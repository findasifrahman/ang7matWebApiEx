import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';

import { HomeComponent } from './userarea/home/home.component';
import { ProductsComponent } from './userarea/products/products.component';
import { ServicesComponent } from './userarea/services/services.component';
import { AboutusComponent } from './userarea/aboutus/aboutus.component';
import { ClientsComponent } from './userarea/clients/clients.component';
import { ContactusComponent } from './userarea/contactus/contactus.component';

import { LoginformComponent } from './adminarea/loginmodule/loginform/loginform.component';



const approutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'products', component: ProductsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: "admin", component: LoginformComponent },
  {/*This route lazy loades */
    path: 'product',
    loadChildren: './adminarea/productmodule/productmomdule/productmodule.module#ProductmoduleModule'
  }
];
export function mytokenGetter() {
  //return this.logservice.getUserLogStatus();
  return localStorage.getItem('jwt');
}
@NgModule({
  imports: [
    RouterModule.forRoot(approutes),
    JwtModule.forRoot({/* automatically assign bearer token with every http request service*/
      config: {
        tokenGetter: mytokenGetter,
        whitelistedDomains: ['localhost:5000'],
        blacklistedRoutes: []
      }
    })],
  exports: [
    RouterModule
  ]
})
export class approuteModule {


};
