import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {catchError} from 'rxjs/operators'
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = "https://restcountries.eu/rest/v2"

  constructor(private http: HttpClient) { }


  //El observable es un generico, yo debo decirle q retorna
  buscarPais(termino:string):Observable<Country[]>{
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url);
    /*  
    esta es otra forma de atrapar el error con operadores
    rxjs, el of, convierte cualquier objeto q retorna 
    en un observable
    .pipe(
      catchError(err => of([]))
    );
    */
  }

  buscarPaisByCapital(termino:string):Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url);
  }


  getPaisByAlpha(id:string):Observable<Country>{
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }




}
