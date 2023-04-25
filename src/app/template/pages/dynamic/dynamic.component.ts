import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


interface Persona {
  nombre: string;
  favoritos: Favorito[]
}

interface Favorito {
  id: number;
  nombre: string;
}


@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styles: [
  ]
})
export class DynamicComponent {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  nuevoFavorito: string = '';


  persona: Persona = {
    nombre: 'Carlos',
    favoritos: [
      { id: 243343, nombre: 'Java'},
      { id: 2343434, nombre: 'Sql'}
    ]
  }


  agregarFavorito() {

    if ( this.nuevoFavorito.length < 0 ) return;

    const favorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoFavorito,
    }

   // this.persona.favoritos.push ( {...favorito } );
    
     this.persona.favoritos.push( favorito );

    this.nuevoFavorito = '';

  }
  
  eliminar ( index: number ) {

    this.persona.favoritos.splice(index, 1 );

  }

  guardar(): void {

    console.log( this.miFormulario.value );

      
  }
}
