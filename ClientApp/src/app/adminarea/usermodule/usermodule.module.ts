import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { commoncoremodule } from '../../commonCoreModule/commonCoreModule';
import { FileUploadModule } from 'ng2-file-upload';

import { AuthGuard } from 'src/app/auth.guard';

import { usermodelsform } from '../../models/usermodels';
import { UsercreateComponent } from './usercreate/usercreate.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserupdateComponent } from './userupdate/userupdate.component';
@NgModule({
  declarations: [UsercreateComponent, UserlistComponent, UserupdateComponent],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, FileUploadModule, commoncoremodule,
    usermodelsform
  ]
})
export class UsermoduleModule { }
