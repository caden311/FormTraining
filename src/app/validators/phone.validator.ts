import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { Utils } from "../utils/utils";

export function isValidPhone(): ValidatorFn {
  return (c: AbstractControl): ValidationErrors | null => {
    if (!c.value || Utils.IsValidPhoneNumber(c.value)) {
      return null;
    } else {
      return {
        validPhone: {
          valid: false,
        },
      };
    }
  }
}