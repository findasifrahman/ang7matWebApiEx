import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginserviceService } from '../loginservice.service';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  simpleSnackBarRef: any;
  Forms: any;
  constructor(private snackBar: MatSnackBar, private logservice: LoginserviceService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.Forms = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  async FormSubmit() {
    const formValue = this.Forms.value;
    await this.logservice.submit(formValue).subscribe(response => {
      let token = (<any>response).token;
      localStorage.setItem("jwt", token);
      console.log(this.logservice.getrole());
      this.snackBar.open('Congradulations. Logged In Succesdfull', "Remove", {
        duration: 6000,
        verticalPosition: 'top',
        panelClass: ['blue-snackbar']
      });
      //this.router.navigate(["/"]);
    }, err => {
      this.snackBar.open('Wrong Username Password',"Undo",{
        duration: 6000,
        verticalPosition: 'top',
        panelClass: ['red-snackbar']
      });
    });
  }


}


