import { NgModule } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule, FormsModule, FormArray } from '@angular/forms';
 //to update complex foreign key table put fake value in Id field of master table loke  0 in entity framework
export interface usermodels {
  username: string;
  userphone: string;
  address: userAddressmodels;
}
interface userAddressmodels {
  area: string;
  areaCode: number;
}
@NgModule({
  imports: [ReactiveFormsModule, FormsModule],
  exports: []
})
export class usermodelsform {
  modelForms: FormGroup = this.formBuilder.group({
    username: ["", Validators.required],
    userphone: ["", Validators.required],
    userAddress: this.formBuilder.array([this.modelAddressFormfunc()])
  });

  modelAddressFormfunc() {
    return this.formBuilder.group({
      userModelsId: [0], //to update complex foreign key table put fake value in Id field of master table loke  0 in entity framework
      area: '',
      areaCode: ''
    })
  }
  controlReturn() {
    const fa = this.modelForms.get('userAddress') as FormArray;
    return fa.controls;
  }
  pushInChild(val: any) {
   return  this.formBuilder.group({
      userModelsId: 0, //to update complex foreign key table put fake value in Id field of master table loke  0 in entity framework
      area: val['area'],
      areaCode: val['areaCode']
    })
  }
  getChildControl(mForm: FormGroup) {
    return <FormArray>mForm.controls['userAddress'];
  }
  constructor(private formBuilder: FormBuilder) { }

}
