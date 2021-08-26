import { AbstractControl, AsyncValidatorFn } from "@angular/forms";
import * as _ from 'lodash';

 export function validClient():AsyncValidatorFn  {
    return async (c: AbstractControl) => {
      if (!c.value || await validateClient(c.value)) {
        return null;
      } else {
        return {
          validClient: {
            valid: false,
          },
        };
      }
    }
  }

  function validateClient(val) {
    return new Promise((resolve, rejeject) => {
      setTimeout(() => {
          let found = ['caden','pete','carson','robert','matt','devyn','etc'].indexOf(val.toLocaleLowerCase()) !== -1;
          resolve(found);
      }, 3000);
    });
  }
  