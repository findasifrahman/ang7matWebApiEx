import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';
import { __await } from 'tslib';
import { MatSnackBar } from '@angular/material';
import { usermodelsform, usermodels } from '../../../models/usermodels';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-userupdate',
  templateUrl: './userupdate.component.html',
  styleUrls: ['./userupdate.component.css']
})
export class UserupdateComponent implements OnInit {
  id: any;
  Forms = this.usermodelsform.modelForms;
  constructor(private usermodelsform: usermodelsform, private snackBar: MatSnackBar, private route: ActivatedRoute, private userService: UserserviceService, private formBuilder: FormBuilder, public _router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log("update id--" + params['id']);
      this.userService.getbyid(this.id).subscribe((data) => {
        this.Forms.patchValue(data);
        //empty Forms
        const childControl = this.usermodelsform.getChildControl(this.Forms); //<FormArray>this.Forms.controls['userAddress'];
        for (let i = childControl.length - 1; i >= 0; i--) {
          childControl.removeAt(i)
        }
        data['userAddress'].forEach((val) => {
          (this.usermodelsform.getChildControl(this.Forms)).push(this.usermodelsform.pushInChild(val));
        });
        //console.log(this.Forms.value);
      });
    })
  }
  async FormUpdate() {
    const formValue = this.Forms.value;
    console.log(formValue);
    await this.userService.update(this.id, formValue).subscribe(() => {
      console.log("Update req successfull");
      this.snackBar.open('Data Updated Successfully', "Remove", {
        duration: 5000, verticalPosition: 'top', panelClass: ['blue-snackbar']
      });
      this._router.navigate(['/userlist']);
    },
      error => {
        console.log("error Update", error);
        this.snackBar.open('Update Unsuccessfull', "Remove", {
          duration: 6000, verticalPosition: 'top', panelClass: ['red-snackbar']
        });
      }
    );
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
