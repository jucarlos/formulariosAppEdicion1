import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pais } from '../interfaces/paises.interfaces';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {


  private baseUrl = 'https://restcountries.com/v2';

  private _regiones = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  get regiones() {
    return [...this._regiones];
  }


  constructor(private http: HttpClient ) { }


  getPaisesPorRegion(region: string ): Observable<Pais[]> {
//https://restcountries.com/v2/region/europe?fields=name,alpha3Code

    const url = `${this.baseUrl}/region/${region}?fields=name,alpha3Code`;
    
    return this.http.get<Pais[]>( url );


  }

  //https://restcountries.com/v2/alpha/ROU?fields=name,alpha3Code,borders
  getPaisPorCodigo( codigo: string ): Observable<Pais | null> {

    if (!codigo ) {
      return of ( null );
    }

    const url = `${this.baseUrl}/alpha/${codigo}?fields=name,alpha3Code,borders`;
    return this.http.get<Pais>( url )
    .pipe(
      delay( 1000 )
    );

  }



}
