/* Angular forms */
import { FormControl, Validators } from '@angular/forms';

export const defaultData = (value?: string) => {
  return new FormControl(value || '', Validators.required);
};

export const fieldWithoutValidations = (value?: string) => {
  return new FormControl(value || '', null);
};
