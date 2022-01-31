import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Text } from './entity/text';
import { catchError, Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root' //TODO what does this mean
})
export class TextService {

  constructor(private httpClient: HttpClient) { }

  // copied from https://angular.io/guide/http
  private handleError<T>(operation = 'operation', result?: T) {

    return (error: any): Observable<T> => {

      console.error(`${operation} failed: ${error.message}`);


      return of(result as T);

    };
  }

  getTexts(): Observable<Text[]>{
    return [] as any;
  }

  getText(id: string): Observable<Text>{
    return null as any;
  }

  addText(composed:Text): Observable<Text>{
    return this.httpClient.post<Text>("http://localhost:8080/api/v1/text",composed).pipe(
      // catchError(this.handleError<Text>('addText'))
      )
    // .pipe()
    // return null as any;
  }

}
