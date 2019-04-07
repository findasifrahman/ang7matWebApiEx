import { Component, OnInit } from '@angular/core';
import { RouterModule, Route, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductdataserviceService } from '../productdataservice.service';
import { Router } from '@angular/router';
import { __await } from 'tslib';
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
  _file3id: string = null;
  _file2id: string = null;
  _file1id: string = null;
  filenameinput3PrevVal: string = null;
  filenameinput2PrevVal: string = null;
  filenameinput1PrevVal: string = null;


  registerText: any = "Enter Product";
  successalert: boolean = false;
  dangeralert: boolean = false;

  dangeralerttext: string = 'default';
  successalerttext: string = 'default';

  constructor(private route: ActivatedRoute, private productService: ProductdataserviceService, private formBuilder: FormBuilder, public _router: Router) { }
  Forms = this.formBuilder.group({
      id:[""],
      productName: ["", Validators.required],
      productTitle: ["", Validators.required],
      productGroup: [""],
      price: [""],
      image1: [""],
      image2: [""],
      image3: [""],
      description: [""]
    });
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log("update id--" + params['id']);
      this.productService.getbyid(this.id).subscribe((data) => {
        this.filenameinput3PrevVal = data["image3"];
        this.filenameinput2PrevVal = data["image2"];
        this.filenameinput1PrevVal = data["image1"];
        this.Forms.patchValue({
          productName: data["productName"],
          productTitle: data["productTitle"],
          productGroup: data["productGroup"],
          price: data["price"],
          description: data["description"]
        })
      });

    })
  }

  async FormUpdate() {
    this.Forms.patchValue({
      id: this.id,
      image1: this._file1id,
      image2: this._file2id,
      image3: this._file3id
    })
    const formValue = this.Forms.value;
    console.log(formValue);
    await this.productService.update(this.id, formValue).subscribe((data) =>
        {
          console.log("Update req successfull");
          this._router.navigate(['/productdatalist']);
        },
      error => {
        console.log("error Update", error);
        this.dangeralert = true;
        this.dangeralerttext = "Problem Update data";
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
