import { Component, OnInit, ChangeDetectorRef, ElementRef,ViewChild,Input,Output} from '@angular/core';
import { formatDate } from '@angular/common';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductdataserviceService } from '../productdataservice.service';
import { Router } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';
import { v4 as uuid } from 'uuid';
import { FileUploadComponent } from '../../file-upload/file-upload.component';
import { __await } from 'tslib';
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
  filenameinput3PrevVal: string = null;
  filenameinput2PrevVal: string = null;
  filenameinput1PrevVal: string = null;
  //@ViewChild('fileInput3') fileInput3: ElementRef;

  registerText: any = "Enter Product";

  successalert: boolean = false;
  dangeralert: boolean = false;

  dangeralerttext: string = 'default';
  successalerttext: string = 'default';

   Forms = this.formBuilder.group({
      productName: ["", Validators.required],
      productTitle: ["", Validators.required],
      productGroup: [""],
      price: [""],
      image1: [""],
      image2: [""],
      image3: [""],
      description: [""]
   });

  constructor(private fileupload:FileUploadComponent,private productService: ProductdataserviceService, private formBuilder: FormBuilder, private router: Router) {
    this.Forms = formBuilder.group({
      hideRequired: false,
      floatLabel: 'auto',
    });

  }

  ngOnInit() {
    this.Forms = this.formBuilder.group({
      productName: ["", Validators.required],
      productTitle: ["", Validators.required],
      productGroup: [""],
      price: [""],
      image1: [""],
      image2: [""],
      image3: [""],
      description: [""]
    });
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
          this.successalert = true;
          this.successalerttext = "Data arrived successfully";
        },
        error => {
          console.log("error post", error);
          this.dangeralert = true;
          this.dangeralerttext = "Problem Getting data";
        }
      );

    }
    catch (err) {
      this.dangeralert = true;
      this.dangeralerttext = "Problem Getting data";
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
