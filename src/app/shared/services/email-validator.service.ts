import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, delay, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator {

  constructor( private http: HttpClient ) { }


  validate(control: AbstractControl<any, any>): Observable<ValidationErrors | null> {
  
    if ( !control.value ) {
      return of ( null );
    }

    const email = control.value;
   
    const emailObs = new Observable<ValidationErrors | null>( ( subscriber ) => {

      if ( email === 'test2@test.com') {
        subscriber.next({ emailUsado: true });
        subscriber.complete();
      }
      subscriber.next( null );
      subscriber.complete();


    } ).pipe( delay ( 2000 ));

    return emailObs;
    

}





  // validate(control: AbstractControl<any, any>): Observable<ValidationErrors | null> {
  
  //     if ( !control.value ) {
  //       return of ( null );
  //     }

  //     const email = control.value;
  //     const url = `http://localhost:3000/usuarios?q=${email}`;
   
  //     // console.log('Estamos en el validador:', email );

  //     return this.http.get( url )
  //     .pipe(
  //       delay( 2000 ),
  //       map ( (resp: any) => {
  //         // console.log( 'Estoy en el map: ' , resp );
  //         return ( resp.length === 0) ? null : { emailUsado: true }
        
  //       })
  //     )

  // }
  
}
