import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appValidation]',
  providers:[{
    provide:NG_VALIDATORS,
    useExisting:ValidationDirective,
    multi:true
 }]
})
export class ValidationDirective implements Validator{

  constructor() { }
  validate(control: AbstractControl):{[key:string]:any} | null {
    var lettersReg = /^[א-ת| ]+$/i;
    if(control.value&&!lettersReg.test(control.value) )
      return {"onlyLettersInValid":true};

    var DigitReg =/^[0123456789]{9,10}$/;// /^[0-9]+$/i;
    if(control.value&&!DigitReg.test(control.value) )
      return {"onlyDigitsInValid":true}

    return null
 
  }


}
