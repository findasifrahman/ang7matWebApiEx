import { NgModule } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';

export interface productmodels {
  productName: string,
  productTitle: string,
  productGroup: string,
  price: number,
  image1: string,
  image2: string,
  image3: string,
  description: string
}
@NgModule({
  imports: [ReactiveFormsModule, FormsModule],
  exports:[]
})
export class productmodelsform {
  modelForms: FormGroup = this.formBuilder.group({
    productName: ["", Validators.required],
    productTitle: ["", Validators.required],
    productGroup: [""],
    price: [""],
    image1: [""],
    image2: [""],
    image3: [""],
    description: [""]
  });

  constructor(private formBuilder: FormBuilder) {}

}
