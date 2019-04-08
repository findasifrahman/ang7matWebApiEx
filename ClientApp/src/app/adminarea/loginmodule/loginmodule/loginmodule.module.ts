import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { materialModule } from '../../../materialModule';
import { FlexLayoutModule } from '@angular/flex-layout';

import { LoginformComponent } from '../loginform/loginform.component';

import { LoginserviceService } from '../loginservice.service';
@NgModule({
  declarations: [LoginformComponent],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, materialModule, FlexLayoutModule
  ],
  providers: [LoginserviceService]
})
export class LoginmoduleModule { }
