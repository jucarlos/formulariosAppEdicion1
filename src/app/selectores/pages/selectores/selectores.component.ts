import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisesService } from '../../services/paises.service';
import { Pais } from '../../interfaces/paises.interfaces';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-selectores',
  templateUrl: './selectores.component.html',
  styleUrls: ['./selectores.component.css']
})
export class SelectoresComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({

      region: ['', Validators.required ],
      pais: [ '' , Validators.required ],
      frontera: ['', Validators.required ]

  });


  // Propiedades de los selectores
  regiones: string[] = [];
  paises: Pais[] = [];
  fronteras: string[] = [];


  // Ui
  cargando = false;


  constructor( private readonly fb: FormBuilder,
              private readonly paisesService: PaisesService  ) {}

  ngOnInit(): void {
    
    this.regiones = this.paisesService.regiones;

    // Cuando cambia el primer selector
    // this.miFormulario.get('region')?.valueChanges.subscribe( region => {

    //   this.paisesService.getPaisesPorRegion( region ).subscribe( paises => {

    //     this.paises = paises;

    // });

    this.miFormulario.get('region')?.valueChanges
    .pipe(
      tap( region => {
        this.miFormulario.get('pais')?.reset('');
        this.cargando = true;
      } ),
      
      switchMap( region => this.paisesService.getPaisesPorRegion( region ))
    ).subscribe( paises => {

      this.paises = paises;
      this.cargando = false;
    });

      // Cuando cambia el segundo selector
    this.miFormulario.get('pais')?.valueChanges
    .pipe(
      tap( pais => {
        this.miFormulario.get('frontera')?.reset('');
        this.cargando = true;
      } ),
      switchMap( codigo => this.paisesService.getPaisPorCodigo( codigo ))
    ).subscribe( pais => {

      ( pais )  ?  this.fronteras = pais?.borders || [] : this.fronteras = [];
      this.cargando = false;

    });



  }





  guardar() {

    console.log('Guardando: ', this.miFormulario.value );

  }

}
