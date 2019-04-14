import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';
import { __await } from 'tslib';
import { MatSnackBar } from '@angular/material';

import { usermodels, usermodelsform } from '../../../models/usermodels';
@Component({
  selector: 'app-usercreate',
  templateUrl: './usercreate.component.html',
  styleUrls: ['./usercreate.component.css']
})
export class UsercreateComponent implements OnInit {
  Forms: FormGroup;
  constructor(private usermodelsform: usermodelsform, private snackBar: MatSnackBar, private userService: UserserviceService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.Forms = this.usermodelsform.modelForms;
  }
  FormSubmit() {
    const formValue = this.Forms.value;
    console.log('--------------');
    console.log(formValue);
    this.userService.Add(formValue).subscribe(data => {
      console.log("success");
    },
      error => {
        console.log(error);
    });
  }
  getControls() {
    return this.usermodelsform.controlReturn();
  }

  addNewAddress(control) {
    control.push(this.usermodelsform.modelAddressFormfunc());
  }

  deleteAddress(control, index) {
    control.removeAt(index)
  }
}
