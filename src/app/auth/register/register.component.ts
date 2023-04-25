import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent {

  constructor(private readonly fb: FormBuilder ) {}

  public miFormulario: FormGroup = this.fb.group({
    nombre: [ '',  
      [ Validators.required, Validators.minLength(3)]     
    ],
    identificador: [],
    email: [ '', [ Validators.required,]],
    userName: ['', [ Validators.required ]   ],
    password1: ['', [ Validators.required, Validators.minLength(6)]    ],
    password2: ['', [ Validators.required ]    ]

  },  {
    validators: [  ]
  }   );



  guardar() {



    console.log('ENVIANDO EL FORMULARIO.')
  }


}
