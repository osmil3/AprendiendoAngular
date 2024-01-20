import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of} from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {
  private apiUrl:string = 'https://restcountries.com/v3.1'

  constructor(private http: HttpClient) { }

  searchContryByAlphaCode( code: string): Observable<Country | null>{
    const url = `${ this.apiUrl }/alpha/${ code }`;
    return this.http.get<Country[]>( url )
        .pipe(
          map( countries => countries.length > 0 ? countries[0]: null),
          catchError( () =>  of(null) )

      );

  }

  searchCApital( term:string ):Observable<Country[]>{
    const url = `${ this.apiUrl }/capital/${ term }`;
    return this.http.get<Country[]>( url )
      .pipe(
        catchError( () =>  of([]) )

      );


  }

  searchContry( term:string):Observable<Country[]>{
    const url = `${ this.apiUrl }/name/${ term }`;
    return this.http.get<Country[]>(url)
      .pipe(
        catchError( () => of([]))
      )

  }

  searchRegion( region:string):Observable<Country[]>{
    const url = `${ this.apiUrl }/region/${ region }`;
    return this.http.get<Country[]>(url)
      .pipe(
        catchError( () => of([]))
      )
  }

}
