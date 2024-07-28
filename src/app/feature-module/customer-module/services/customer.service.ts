import {Injectable} from '@angular/core';
import {ICustomer} from '../models/customer.interface';
import {Observable, of} from 'rxjs';
import {LocalStorageService} from "../../../core-moule/services/local-storage.service";
import {Customer} from "../models/customer.model";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private localStorageService: LocalStorageService) {
  }

  getCustomerList(): Observable<ICustomer[]> {
    const list = this.localStorageService.getCustomerList();
    return list?.length > 0 ? of(list) : of([]);
  }

  public createCustomer(customer: ICustomer): Observable<ICustomer> {
    if (this.findSameCustomers(customer).length == 0) {
      customer.id = new Date().getTime();
      this.localStorageService.addCustomer(customer);
      return of(customer);
    } else {
      return of(new Customer());
    }
  }

  findSameCustomers(customer: ICustomer): ICustomer[] {
    let foundedCustomers: ICustomer[] = [];
    const list = this.localStorageService.getCustomerList();
    if (list?.length > 0) {
      for (const item of list) {
        if (item.Email === customer.Email || (
          item.Firstname === customer.Firstname && item.Lastname === customer.Lastname
          && item.DateOfBirth === customer.DateOfBirth)) {
          foundedCustomers.push(item);
        }
      }
    }
    return foundedCustomers;
  }

  public updateCustomer(customer: ICustomer): Observable<ICustomer> {
    if (this.findSameCustomers(customer).length <= 1) {
      this.localStorageService.updateCustomer(customer);
      return of(customer);
    } else {
      return of(new Customer());
    }
  }

  public deleteCustomer(customer: ICustomer): Observable<ICustomer[]> {
    if (this.findSameCustomers(customer).length == 1) {
      return of(this.localStorageService.deleteCustomer(customer));
    } else {
      return of([]);
    }
  }
}
