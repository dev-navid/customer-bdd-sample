import {Injectable} from '@angular/core';
import {ICustomer} from "../../feature-module/customer-module/models/customer.interface";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public getCustomerList(): ICustomer[] {
    const list = localStorage.getItem('customers');
    if (!!list) {
      return JSON.parse(list);
    } else {
      return [];
    }
  }

  public addCustomer(customer: ICustomer): void {
    const list = this.getCustomerList();
    list.push(customer);
    localStorage.setItem('customers', JSON.stringify(list));
  }

  public updateCustomer(customer: ICustomer): void {
    const list = this.getCustomerList();
    let index = list.findIndex(x => x.id === customer.id);
    list[index] = customer;
    localStorage.setItem('customers', JSON.stringify(list));
  }

  public deleteCustomer(customer: ICustomer): ICustomer[] {
    const list = this.getCustomerList();
    let index = list.indexOf(customer);
    list.splice(index, 1);
    localStorage.setItem('customers', JSON.stringify(list));
    return list;
  }

  public clearLocalStorage(): void {
    localStorage.clear();
  }
}
