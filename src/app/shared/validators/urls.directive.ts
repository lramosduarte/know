import { Observable }from 'rxjs';

import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
}from '@angular/forms';

export function URLDisponivelValidator(): AsyncValidatorFn {
  return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return fetch(control.value, {method: 'HEAD', mode: 'no-cors'});
  };
}
