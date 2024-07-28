import {ICustomer} from './customer.interface';
import {ID} from "../../../core-moule/base-models/base-model";

export class Customer implements ICustomer {

  constructor(
    public Firstname?: string,
    public Lastname?: string,
    public DateOfBirth?: Date,
    public PhoneNumber?: string,
    public Email?: string,
    public BankAccountNumber?: string,
    public id?: ID
  ) {
  }

  toString(): string {
    return this.Firstname + ' ' + this.Lastname;
  }
}
