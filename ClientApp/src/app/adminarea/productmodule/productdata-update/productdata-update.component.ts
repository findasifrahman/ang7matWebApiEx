import { Component, OnInit } from '@angular/core';
import { RouterModule, Route, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductdataserviceService } from '../productdataservice.service';
import { Router } from '@angular/router';
import { __await } from 'tslib';
import { MatSnackBar } from '@angular/material';
import { productmodelsform, productmodels } from '../../../models/productmodels';
@Component({
  selector: 'app-productdata-update',
  templateUrl: './productdata-update.component.html',
  styleUrls: ['./productdata-update.component.css']
})
export class ProductdataUpdateComponent implements OnInit {
  id: any;

  filenameinput3: string = "Image 3";
  filenameinput2: string = "Image 2";
  filenameinput1: string = "Image 1";
  _file3id: string = null; //prev val assign
  _file2id: string = null;
  _file1id: string = null;

  constructor(private productmodelsform: productmodelsform, private snackBar: MatSnackBar, private route: ActivatedRoute, private productService: ProductdataserviceService, private formBuilder: FormBuilder, public _router: Router) { }
  Forms = this.productmodelsform.modelForms;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log("update id--" + params['id']);
      this.productService.getbyid(this.id).subscribe((data: productmodels) => {
        this._file3id = data["image3"]; //prev val assign
        this._file2id = data["image2"];
        this._file1id = data["image1"];

        this.Forms.patchValue(data);
      });
    })
  }

  async FormUpdate() {
    this.Forms.patchValue({
      image1: this._file1id,
      image2: this._file2id,
      image3: this._file3id
    })
    const formValue = this.Forms.value;
    console.log(formValue);
    await this.productService.update(this.id, formValue).subscribe(() =>
    {
        console.log("Update req successfull");
          this.snackBar.open('Data Updated Successfully', "Remove", {
            duration: 5000,verticalPosition: 'top',panelClass: ['blue-snackbar']
          });
          this._router.navigate(['/product/list']);
        },
      error => {
        console.log("error Update", error);
        this.snackBar.open('Update Unsuccessfull', "Remove", {
          duration: 6000,verticalPosition: 'top',panelClass: ['red-snackbar']
        });
      }
    );
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
