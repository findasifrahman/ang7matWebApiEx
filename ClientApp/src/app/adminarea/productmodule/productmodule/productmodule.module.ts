import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { materialModule } from '../../../materialModule';
import { FileUploadModule } from 'ng2-file-upload';

import { ProductdataComponent } from '../productdata/productdata.component';
import { ProductdataUpdateComponent } from '../productdata-update/productdata-update.component';
import { ProductdataListComponent } from '../productdata-list/productdata-list.component';
import { ConfirmationDialogComponent } from '../../../servicearea/confirmation-dialog/confirmation-dialog.component';
import { FileUploadComponent } from '../../../servicearea/file-upload/file-upload.component';

import { ProductdataserviceService } from '../productdataservice.service';
@NgModule({
  declarations: [ProductdataComponent, ProductdataUpdateComponent, ProductdataListComponent, FileUploadComponent],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, materialModule, FileUploadModule, 
  ],
  providers: [ProductdataserviceService, FileUploadComponent],
  entryComponents: [ConfirmationDialogComponent]
})
export class ProductmoduleModule { }
