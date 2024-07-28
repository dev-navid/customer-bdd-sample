import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './shared-module/components/header/header.component';
import {CustomerListComponent} from './feature-module/customer-module/components/customer-list/customer-list.component';
import {MatDividerModule} from "@angular/material/divider";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {
  AddCustomerModalComponent
} from './feature-module/customer-module/components/add-customer-modal/add-customer-modal.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from "@angular/material/dialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MAT_DATE_LOCALE, MatNativeDateModule} from "@angular/material/core";
import {AlertModalComponent} from './shared-module/components/alert-modal/alert-modal.component';
import {ConfirmModalComponent} from './shared-module/components/confirm-modal/confirm-modal.component';
import {MatFormFieldModule} from "@angular/material/form-field";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomerListComponent,
    AddCustomerModalComponent,
    AlertModalComponent,
    ConfirmModalComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatDividerModule,
        MatTableModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatDialogModule,
        MatNativeDateModule,
        MatFormFieldModule,
    ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
