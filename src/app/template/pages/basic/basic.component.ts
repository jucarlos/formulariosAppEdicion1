import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  @ViewChild('myForm') myForm!: NgForm;

  initForm = {
    producto: '',
    precio: 0,
    existencias: 0
  };
  
  constructor() {}


  ngOnInit(): void {
    // tendriamos datos de una bd.
  }




  campoNoValido(campo: string): boolean {

    return this.myForm?.controls[campo]?.invalid && this.myForm?.controls[campo]?.touched;

  }

  precioNoValido(): boolean {

    return this.myForm?.controls['precio']?.value <= 0 && this.myForm?.controls['precio']?.touched;

  }

  existenciasNoValido(): boolean {
    return this.myForm?.controls['existencias']?.invalid && this.myForm?.controls['existencias']?.touched;
  }


  guardar( ) {

    if ( this.myForm.invalid ) {

      this.myForm.control.markAllAsTouched();

      return;

    }

    console.log( this.myForm.value );
    this.myForm.resetForm( this.initForm );

  }

}
