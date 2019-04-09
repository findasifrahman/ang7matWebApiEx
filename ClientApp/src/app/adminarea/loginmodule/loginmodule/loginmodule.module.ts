import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { commoncoremodule } from '../../../commonCoreModule/commonCoreModule';

import { LoginformComponent } from '../loginform/loginform.component';

/** from angular 6 service doesnot need to be in provider they are available in everywhere */
@NgModule({
  declarations: [LoginformComponent],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, commoncoremodule 
  ],
  exports: [LoginformComponent],
  providers: []/** from angular 6 service doesnot need to be in provider they are available in everywhere */
})
export class LoginmoduleModule { }
