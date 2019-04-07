import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { formatDate } from '@angular/common';
import { FormControl, FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpParams, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './userarea/home/home.component';
import { SocialContactCardComponent } from './userarea/socialcontactcard/socialcontactcard.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,MatButtonModule,MatButtonToggleModule,MatCardModule,MatCheckboxModule,MatChipsModule,MatDatepickerModule,MatDialogModule,
  MatExpansionModule,MatGridListModule,MatIconModule,MatInputModule,MatListModule,MatMenuModule,MatNativeDateModule,MatPaginatorModule,
  MatProgressBarModule,MatProgressSpinnerModule,MatRadioModule,MatRippleModule,MatSelectModule,MatSidenavModule,MatSliderModule,MatSlideToggleModule,
  MatSnackBarModule,MatSortModule,MatTableModule,MatTabsModule,MatToolbarModule,MatTooltipModule,MatStepperModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './userarea/footer/footer.component';
import { ProductsComponent } from './userarea/products/products.component';
import { ServicesComponent } from './userarea/services/services.component';
import { AboutusComponent } from './userarea/aboutus/aboutus.component';
import { ClientsComponent } from './userarea/clients/clients.component';
import { ContactusComponent } from './userarea/contactus/contactus.component';
import { ProductdataComponent } from './adminarea/productdata/productdata.component';
import { ProductdataserviceService } from './adminarea/productdataservice.service';
import { CdkTableModule } from '@angular/cdk/table';
import { FileUploadModule } from 'ng2-file-upload';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ProductdataListComponent } from './adminarea/productdata-list/productdata-list.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { ProductdataUpdateComponent } from './adminarea/productdata-update/productdata-update.component';
import { LoginformComponent } from './adminarea/loginform/loginform.component';
import { LoginserviceService } from './adminarea/loginservice.service';
import { AuthGuard } from './auth.guard';
import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';

export function tokenGetter() {
  return localStorage.getItem('jwt');
}

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    SocialContactCardComponent,
    FooterComponent,
    ProductsComponent,
    ServicesComponent,
    AboutusComponent,
    ClientsComponent,
    ContactusComponent,
    ProductdataComponent,
    FileUploadComponent,
    ProductdataListComponent,
    ConfirmationDialogComponent,
    ProductdataUpdateComponent,
    LoginformComponent,

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'aboutus', component: AboutusComponent },
      { path: 'clients', component: ClientsComponent },
      { path: 'contactus', component: ContactusComponent },
      { path: 'productdata', component: ProductdataComponent },
      { path: 'productdatalist', component: ProductdataListComponent,canActivate: [AuthGuard] },
      { path: "productdataupdate/:id", component: ProductdataUpdateComponent },
      { path: "admin", component: LoginformComponent },
      { path: "login", component: LoginformComponent }
    ]),
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule,
    MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule,
    MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule,
    MatSnackBarModule, MatSortModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatStepperModule,
    NgbModule, CdkTableModule, FileUploadModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:5000'],
        blacklistedRoutes: ['example.com/examplebadroute/']
      }
    })
  ],
  providers: [ProductdataserviceService, LoginserviceService, FileUploadComponent, AuthGuard, JwtModule, JwtHelperService],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmationDialogComponent]
})
export class AppModule { }

