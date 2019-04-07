import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './userarea/home/home.component';
import { ProductsComponent } from './userarea/products/products.component';
import { ServicesComponent } from './userarea/services/services.component';
import { AboutusComponent } from './userarea/aboutus/aboutus.component';
import { ClientsComponent } from './userarea/clients/clients.component';
import { ContactusComponent } from './userarea/contactus/contactus.component';

import { ProductdataComponent } from './adminarea/productmodule/productdata/productdata.component';
import { ProductdataListComponent } from './adminarea/productmodule/productdata-list/productdata-list.component';
import { ProductdataUpdateComponent } from './adminarea/productmodule/productdata-update/productdata-update.component';

import { LoginformComponent } from './adminarea/loginmodule/loginform/loginform.component';
import { AuthGuard } from './auth.guard';

const approutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'products', component: ProductsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'productdata', component: ProductdataComponent },
  { path: 'productdatalist', component: ProductdataListComponent, canActivate: [AuthGuard] },
  { path: "productdataupdate/:id", component: ProductdataUpdateComponent },
  { path: "admin", component: LoginformComponent },
  { path: "login", component: LoginformComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [
    RouterModule
  ]
})
export class approuteModule { };
