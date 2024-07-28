import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {CustomerService} from "../../services/customer.service";
import {ICustomer} from "../../models/customer.interface";
import {MatDialog} from "@angular/material/dialog";
import {MatTableDataSource} from "@angular/material/table";
import {ConfirmModalComponent} from "../../../../shared-module/components/confirm-modal/confirm-modal.component";
import {AlertModalComponent} from "../../../../shared-module/components/alert-modal/alert-modal.component";
import {AddCustomerModalComponent} from "../add-customer-modal/add-customer-modal.component";


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'firstname', 'lastname', 'date-of-birth'
    , 'phone-number', 'email', 'bank-account-number', 'edit', 'delete'];
  customerList: ICustomer[] = [];
  dataSource!: MatTableDataSource<ICustomer>;

  constructor(private _customerService: CustomerService,
              public dialog: MatDialog,
              private _changeDetectorRefs: ChangeDetectorRef) {
    this.dataSource = new MatTableDataSource<ICustomer>();
  }

  ngOnInit(): void {
    //get customers from local storage:
    this.getCustomerList();
    this._changeDetectorRefs.detectChanges();

  }

  getCustomerList() {
    this._customerService.getCustomerList().subscribe((res: ICustomer[]) => {
      this.customerList = res;
      this.dataSource.data = res;
      this._changeDetectorRefs.detectChanges();
    });
  }

  deleteCustomer(customer: ICustomer) {
    const dialogConfig = {
      data: {
        title: `Delete ${customer.Firstname} ${customer.Lastname}?`,
        description: `This will delete all of ${customer.Firstname} ${customer.Lastname}'s data and cannot be undone.`
      }
    };
    let dialogRef = this.dialog.open(ConfirmModalComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => {
        if (data) {
          this._customerService.deleteCustomer(customer).subscribe((res: ICustomer[]) => {
            this.customerList = res;
            this.dataSource.data = res;
            this._changeDetectorRefs.detectChanges();
            this.showAlert('Customer completely is deleted.');
          });
        }
      }
    );
  }

  addCustomer() {
    let dialogRef = this.dialog.open(AddCustomerModalComponent);
    dialogRef.afterClosed().subscribe(
      data => {
        if (data) {
          this.customerList.push(data);
          this.dataSource.data = this.customerList;
          this._changeDetectorRefs.detectChanges();
        }
      }
    );
  }

  editCustomer(customer: any) {
    const dialogConfig = {data: customer};
    let dialogRef = this.dialog.open(AddCustomerModalComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => {
        if (data) {
          let index = this.customerList.findIndex(x => x.id === data.id);
          this.customerList[index] = data;
          this.dataSource.data = this.customerList;
          this._changeDetectorRefs.detectChanges();
        }
      }
    );
  }

  showAlert(text: string) {
    const dialogConfig = {data: {text: text}};
    this.dialog.open(AlertModalComponent, dialogConfig);
  }

  trackById(item: any) {
    return item.id;
  }
}
