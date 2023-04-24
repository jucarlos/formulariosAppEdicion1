import { Component } from '@angular/core';
import { MenuItem } from '../interfaces/menu.interface';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class SideMenuComponent {

  templateMenu: MenuItem[] = [
    {
      texto: 'Básicos',
      ruta: 'template/basic'
    },
    {
      texto: 'Dinámicos',
      ruta: 'template/dynamic'
    },
    {
      texto: 'Switches',
      ruta: 'template/switches'
    }
  ];

  reactiveMenu: MenuItem[] = [
    {
      texto: 'Básicos',
      ruta: 'reactive/basic'
    },
    {
      texto: 'Dinámicos',
      ruta: 'reactive/dynamic'
    },
    {
      texto: 'Switches',
      ruta: 'reactive/switches'
    }
  ];


}
