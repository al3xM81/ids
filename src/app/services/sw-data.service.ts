import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwDataService {

  API_URL = 'https://akabab.github.io/starwars-api/api/all.json';

  constructor(private httpService: HttpClient) { }

  public getAllImages()  {    
    return this.httpService.get<any>(this.API_URL)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  // Default error handler
  private errorHandler(error: HttpErrorResponse)  {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Error code ${error.status}`, '');
    }

    // Return an empty array as observavble
    return of([]);
  }
}
