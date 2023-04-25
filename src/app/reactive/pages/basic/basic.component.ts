import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styles: [
  ]
})
export class BasicComponent implements OnInit{


  // public miFormulario: FormGroup = new FormGroup({
  //   'nombre': new FormControl('Televisor'),
  //   'precio': new FormControl(10),
  //   'existencias': new FormControl(1)
  // });


  public miFormulario: FormGroup = this.fb.group({
    'nombre': [ '', [ Validators.required, Validators.minLength(6)],  ],
    'precio': [  , [ Validators.required, Validators.min(0) ] ,            ],
    'existencias': [ , [ Validators.required, Validators.min(0) ]  ],
   
  });


  
  constructor(private fb: FormBuilder ) {}


  ngOnInit(): void {
    
    // this.miFormulario.setValue({
    //   nombre: 'Lavadora',
    //   precio: 1000,
    //   existencias: 3
    // });
    this.miFormulario.reset({
      nombre: 'Lavadora',
      precio: 600
    });
    
  }


  getMsgError(campo: string ): string | null {

    if ( !this.miFormulario.get(campo)) return null;

    const errores = this.miFormulario.get(campo)?.errors || {};

    for( const key of Object.keys( errores )) {

      switch( key ) {
        case 'required' :
          return 'Este campo es obligatorio';
        case 'minlength':
          return `El mínimo son ${errores['minlength'].requiredLength } caractéres`;

      }

    }

    return null;

  }



  campoNoValido( campo: string ): boolean | null | undefined {
    return this.miFormulario.get(campo)?.errors 
            && this.miFormulario.get(campo)?.touched;
  }


  guardar(): void {



    if ( this.miFormulario.invalid ) {

      this.miFormulario.markAllAsTouched();
      return;

    }

    console.log( this.miFormulario.value );
    console.log('FORMULARIO ENVIADO...');
  }

}
