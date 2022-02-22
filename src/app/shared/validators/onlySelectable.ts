import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export const SelectionRequiredValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  return control?.value.constructor.name === 'String' ? { matchRequired: true } : null;
};
