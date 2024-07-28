import {ValidatorFn, AbstractControl} from '@angular/forms';
import {PhoneNumberUtil} from 'google-libphonenumber';

const phoneNumberUtil = PhoneNumberUtil.getInstance();

export function PhoneNumberValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    let validNumber = false;

    try {
      const phoneNumber = phoneNumberUtil.parseAndKeepRawInput(
        control.value
      );
      validNumber = phoneNumberUtil.isValidNumber(phoneNumber);
    } catch (e) {
    }
    return validNumber ? {} : {'wrongNumber': {value: control.value}};
  }
}
