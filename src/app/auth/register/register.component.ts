import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from '../../shared/services/validator.service';
import { EmailValidatorService } from '../../shared/services/email-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {



  public miFormulario: FormGroup = this.fb.group({
    nombre: [ '',  
      [ Validators.required, Validators.minLength(3)]     
    ],
    
    identificador: [ '', [ 
      Validators.required ,
      Validators.pattern( this.validatorService.expresion_regular_dni ),
      this.validatorService.validaDni
    
    ],    ],
    
    email: [ '', [  
      Validators.required, 
      Validators.pattern( this.validatorService.emailPattern ),
    ] , [ 
      this.emailValidator
     ] ,  ],


    userName: ['', [ Validators.required, this.validatorService.noPuedeSerCarlos ]   ],


    password1: ['', [ Validators.required, Validators.minLength(6) ]    ],
    password2: ['', [ Validators.required ]    ]

  },  {
    validators: [
      this.validatorService.camposIguales('password1', 'password2')
    ]
  }  );


  constructor(
      private readonly fb: FormBuilder,
      private readonly validatorService: ValidatorService,
      private readonly emailValidator: EmailValidatorService
      ) {}



  ngOnInit(): void {
    
    this.miFormulario.reset({
      nombre: 'Fernando',
      identificador: '03869206P',
      userName: 'pedrito',
      email: 'email@google.com'

    });
  }



  campoNoValido(campo: string ) {
    return this.validatorService.campoNoValido( this.miFormulario, campo );
  }


  guardar() {

    console.log( this.miFormulario );


    console.log('ENVIANDO EL FORMULARIO.')
  }


}
