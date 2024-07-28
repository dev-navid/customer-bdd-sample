import {CustomerService} from './customer.service';

describe('Customer service', () => {
  it('Add new user', (done: DoneFn) => {
    const localStorageService = jasmine.createSpyObj('LocalStorageService', ['clearLocalStorage', 'addCustomer', 'getCustomerList']);
    const customerService = new CustomerService(localStorageService);
    localStorageService.clearLocalStorage();
    customerService.createCustomer({
      Firstname: 'Mohsen',
      Lastname: 'Msv',
      DateOfBirth: new Date(),
      PhoneNumber: '+989191234567',
      Email: `testy${new Date().getTime()}@gmail.com`,
      BankAccountNumber: '2345235325'
    }).subscribe((res) => {
      expect(!!res.id).toBe(true);
      expect(localStorageService.addCustomer).toHaveBeenCalledTimes(1);
      done();
    })
  });
});
