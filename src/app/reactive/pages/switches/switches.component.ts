import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    genero: ['M', Validators.required ],
    notificaciones: [ true, Validators.required ],
    condiciones: [ false, Validators.required ]

  });
  
  persona = {
    genero: 'F',
    notificaciones: true,
  }

  constructor(private readonly fb: FormBuilder) {}


  ngOnInit(): void {


    this.miFormulario.reset( { ...this.persona, condiciones: true });
    

  
    this.miFormulario.valueChanges.subscribe(  ( { condiciones, ...rest } ) => {

        // console.log( condiciones );
        // console.table( rest );
        this.persona = rest;
    });

  }




  guardar() {

    if ( this.miFormulario.invalid ) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    // const formValue = this.miFormulario.value;
    // --   delete formValue.condiciones;

    // this.persona = formValue;
    
    const { condiciones, ...valueForm   } = this.miFormulario.value;
   
    this.persona = valueForm;


    console.log('Enviando Persona al servidor: ', this.persona );




  }



}
