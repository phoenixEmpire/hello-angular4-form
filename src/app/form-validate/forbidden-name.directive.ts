import { ValidatorFn, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { Directive, Input } from '@angular/core';

export function forbiddenNameValidator(nameRegExp: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        const forbidden = nameRegExp.test(control.value);
        return forbidden ? { 'forbiddenName': { value: control.value } } : null;
    };
}

@Directive({
    selector: '[appForbiddenName]',
    providers: [{ provide: NG_VALIDATORS, useExisting: ForbiddenNameValidatorDirective, multi: true }]
})
export class ForbiddenNameValidatorDirective {
    @Input('appForbiddenName')
    forbiddenName: string;

    validate(control: AbstractControl): { [key: string]: any } {
        console.log('validator',control.value);
        return this.forbiddenName ? forbiddenNameValidator(new RegExp(this.forbiddenName, 'i'))(control) : null;
    }
}