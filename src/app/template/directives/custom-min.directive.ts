import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } 
    from '@angular/forms';


@Directive({
    selector: '[customMin][ngModel]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: CustomMinDirective,
        multi: true,
    }]
})

export class CustomMinDirective implements Validator {

    @Input() minimo!: number;

    constructor() {
        console.log('Pasando por la directiva' );
    }

    validate(control: AbstractControl ): ValidationErrors | null {

        const inputValue = control.value || 0;
        
        return ( inputValue < this.minimo )
                ? { 'customMin': true }
                : null;
    }
   

}