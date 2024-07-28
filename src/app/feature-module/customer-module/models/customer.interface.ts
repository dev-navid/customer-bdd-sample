import {IBaseModel} from "../../../core-moule/base-models/base-model";

export interface ICustomer extends IBaseModel {
  Firstname?: string;
  Lastname?: string;
  DateOfBirth?: Date;
  PhoneNumber?: string;
  Email?: string
  BankAccountNumber?: string;
}
