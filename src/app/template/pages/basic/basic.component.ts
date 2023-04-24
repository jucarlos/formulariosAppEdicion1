import { Component } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent {



  buscar(texto: string ) {
    console.log( texto );
  }

  tecleando( texto: any ) {
    console.log( event)
  }

}
