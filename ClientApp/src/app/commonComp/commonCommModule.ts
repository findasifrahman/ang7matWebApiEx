import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { commoncoremodule } from '../commonCoreModule/commonCoreModule';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { SocialContactCardComponent } from './socialcontactcard/socialcontactcard.component';
@NgModule({
  declarations: [FooterComponent, NavMenuComponent, SocialContactCardComponent],
  imports: [commoncoremodule, RouterModule],
  exports: [FooterComponent, NavMenuComponent, SocialContactCardComponent],
  providers:[],
  entryComponents: [],
})

export class commonCompModule {}
