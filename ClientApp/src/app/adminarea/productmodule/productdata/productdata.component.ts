import { Component, OnInit} from '@angular/core';
import {  FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ProductdataserviceService } from '../productdataservice.service';
import { Router } from '@angular/router';
import { __await } from 'tslib';
import { MatSnackBar } from '@angular/material';

import { productmodelsform,productmodels } from '../../../models/productmodels';
@Component({
  selector: 'app-productdata',
  templateUrl: './productdata.component.html',
  styleUrls: ['./productdata.component.css'],

})

export class ProductdataComponent implements OnInit {
  filenameinput3: string = "Image 3";
  filenameinput2: string = "Image 2";
  filenameinput1: string = "Image 1";
  _file3id: string = null;
  _file2id: string = null;
  _file1id: string = null;
  //@ViewChild('fileInput3') fileInput3: ElementRef;

  registerText: string = "Enter Product";

  Forms: FormGroup;

  constructor(private productmodelsform: productmodelsform  , private snackBar: MatSnackBar, private productService: ProductdataserviceService, private formBuilder: FormBuilder, private router: Router) {
    this.Forms = formBuilder.group({
      hideRequired: false,
      floatLabel: 'auto',
    });

  }

  ngOnInit() {
    this.Forms = this.productmodelsform.modelForms;
  }

  async FormSubmit() {
    this.Forms.patchValue({
      image1: this._file1id,
      image2: this._file2id,
      image3: this._file3id
    })
    const formValue = this.Forms.value;
    try {
      await this.productService.Add(formValue).subscribe(
        data => {
          console.log("post req successfull");
          this.snackBar.open('Product Added Successfully', "Remove", {
            duration: 6000,
            verticalPosition: 'top',
            panelClass: ['blue-snackbar']
          });
          this.router.navigate(["/product/list"]);
        },
        error => {
          console.log("error post", error);
          this.snackBar.open('Unsuccessfull', "Remove", {
            duration: 6000,
            verticalPosition: 'top',
            panelClass: ['red-snackbar']
          });
        }
      );

    }
    catch (err) {
    }
  }
  file3id($event) {
    this._file3id = $event; console.log("pic id arrived--" + $event);
  }
  file2id($event) {
    this._file2id = $event; console.log("pic id arrived--" + $event);
  }
  file1id($event) {
    this._file1id = $event; console.log("pic id arrived--" + $event);
  }
}
