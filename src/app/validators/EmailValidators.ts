import {FormControl} from '@angular/forms';

export class EmailValidators {
  static isValidEmail(email: FormControl) {
    const EMAIL_REGEXP = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!email.value) {
      return null;
    }
    return !EMAIL_REGEXP.test(email.value) ? { 'incorrectMailFormat': true } : null;
  }
}
