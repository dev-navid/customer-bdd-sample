import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../services/customer.service";
import {ICustomer} from "../../models/customer.interface";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {PatternConstants} from "../../../../shared-module/constants/pattern.constants";
import {AlertModalComponent} from "../../../../shared-module/components/alert-modal/alert-modal.component";
import {PhoneNumberValidator} from "../../../../core-moule/helper/phone-number-validator";


@Component({
  selector: 'app-add-customer-modal',
  templateUrl: './add-customer-modal.component.html',
  styleUrls: ['./add-customer-modal.component.css']
})
export class AddCustomerModalComponent implements OnInit {

  isAdd: boolean;
  registerForm!: FormGroup;
  firstSubmitPush = false;
  error = '';

  constructor(private _customerService: CustomerService,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<AddCustomerModalComponent>,
              public dialog: MatDialog) {
    let formControls;
    if (this.data) {
      this.isAdd = false;
      formControls = {
        Firstname: new FormControl(this.data.Firstname, [Validators.required]),
        Lastname: new FormControl(this.data.Lastname, [Validators.required]),
        DateOfBirth: new FormControl(this.data.DateOfBirth, [Validators.required]),
        PhoneNumber: new FormControl(this.data.PhoneNumber, [Validators.required, PhoneNumberValidator()]),
        Email: new FormControl(this.data.Email, [Validators.required, Validators.email]),
        BankAccountNumber: new FormControl(this.data.BankAccountNumber, [Validators.required, Validators.pattern(PatternConstants.bankAccountNumber)]),
      };
    } else {
      this.isAdd = true;
      formControls = {
        Firstname: new FormControl('', [Validators.required]),
        Lastname: new FormControl('', [Validators.required]),
        DateOfBirth: new FormControl('', [Validators.required]),
        PhoneNumber: new FormControl('', [Validators.required, PhoneNumberValidator()]),
        Email: new FormControl('', [Validators.required, Validators.email]),
        BankAccountNumber: new FormControl('', [Validators.required, Validators.pattern(PatternConstants.bankAccountNumber)]),
      };
    }

    this.registerForm = new FormGroup(formControls);
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.firstSubmitPush = true;
    if (this.registerForm?.invalid) {
      return;
    }
    if (this.isAdd) {
      this.createCustomer();
    } else {
      this.updateCustomer();
    }
  }

  createCustomer() {
    this._customerService.createCustomer(this.registerForm.value).subscribe((res: ICustomer) => {
      if (!!res?.id) {
        this.showAlert('Customer successfully saved...');
        this.dialogRef.close(res);
      } else {
        this.showAlert('Customer is exist...');
      }
    });
  }

  updateCustomer() {
    let customerForEdit = this.registerForm.value;
    customerForEdit.id = this.data.id;
    this._customerService.updateCustomer(customerForEdit).subscribe((res: ICustomer) => {
      if (!!res?.id) {
        this.showAlert('Customer successfully updated...');
        this.dialogRef.close(customerForEdit);
      } else {
        this.showAlert('Customer is exist...');
      }
    });
  }

  showAlert(text: string) {
    const dialogConfig = {data: {text: text}};
    this.dialog.open(AlertModalComponent, dialogConfig);
  }

  closeModal() {
    this.dialogRef.close();
  }
}
