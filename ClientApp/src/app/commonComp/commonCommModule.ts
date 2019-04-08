import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { materialModule } from '../materialModule';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { SocialContactCardComponent } from './socialcontactcard/socialcontactcard.component';
@NgModule({
  declarations: [FooterComponent, NavMenuComponent, SocialContactCardComponent],
  imports: [materialModule, FlexLayoutModule, NgbModule, RouterModule],
  exports: [FooterComponent, NavMenuComponent, SocialContactCardComponent],
  providers:[],
  entryComponents: [],
})

export class commonCompModule {}
