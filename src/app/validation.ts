
import{AbstractControl,ValidatorFn} from '@angular/forms'
//custom validation

export function firstnamevalidation() :ValidatorFn
  {
    return (control:AbstractControl):{[key:string]:boolean}|null=>{
      if(control.value.trim()=="sam")
      {
        return {'notallowed':true};
      }
      return null;
    };
  }