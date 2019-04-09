import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { commoncoremodule } from './commonCoreModule/commonCoreModule';/* Module of material and flex and ngbootstrap are expoted*/

import { approuteModule } from './approute.module';/* all routing with web token*/
import { ProductmoduleModule } from './adminarea/productmodule/productmodule/productmodule.module';
import { LoginmoduleModule } from './adminarea/loginmodule/loginmodule/loginmodule.module'
import { commonCompModule } from './commonComp/commonCommModule';/*Header footer etc components */
/*user area components pages*/
import { ProductsComponent } from './userarea/products/products.component';
import { ServicesComponent } from './userarea/services/services.component';
import { AboutusComponent } from './userarea/aboutus/aboutus.component';
import { ClientsComponent } from './userarea/clients/clients.component';
import { ContactusComponent } from './userarea/contactus/contactus.component';
import { HomeComponent } from './userarea/home/home.component';
/*end user area components pages*/
import { AppComponent } from './app.component';

import { ConfirmationDialogComponent } from './servicearea/confirmation-dialog/confirmation-dialog.component';


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
    commoncoremodule,
    ProductmoduleModule,
    LoginmoduleModule,
    commonCompModule,

    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    approuteModule,
    
    BrowserAnimationsModule,
  ],
  providers: [],/** from angular 6 service doesnot need to be in provider they are available in everywhere */
  bootstrap: [AppComponent],
  entryComponents: [ConfirmationDialogComponent]/*This is a entry component because MAT_DATA had to be Injected in constructor. Go and
                                                 look in the definition of confirmation dialog */
})
export class AppModule { }

