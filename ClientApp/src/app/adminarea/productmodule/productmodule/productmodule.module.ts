import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { commoncoremodule } from '../../../commonCoreModule/commonCoreModule';
import { FileUploadModule } from 'ng2-file-upload';

import { AuthGuard } from 'src/app/auth.guard';

import { ProductdataComponent } from '../productdata/productdata.component';
import { ProductdataUpdateComponent } from '../productdata-update/productdata-update.component';
import { ProductdataListComponent } from '../productdata-list/productdata-list.component';
import { FileUploadComponent } from '../../../servicearea/file-upload/file-upload.component';

import { productmodelsform } from '../../../models/productmodels';


const routes: Routes = [
  { path: 'product/list', component: ProductdataListComponent, canActivate: [AuthGuard] },
  { path: 'product/create', component: ProductdataComponent },
  { path: 'product/update/:id', component: ProductdataUpdateComponent },
];
@NgModule({
  declarations: [
    ProductdataComponent, ProductdataUpdateComponent, ProductdataListComponent, FileUploadComponent
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, FileUploadModule, commoncoremodule,
    RouterModule.forChild(routes), productmodelsform
  ],
  providers: [],
  entryComponents: []
})
export class ProductmoduleModule { }
