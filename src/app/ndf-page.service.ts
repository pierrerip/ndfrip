import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { NDF } from './ndf';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class NDFPageService {
  private backUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getNDFS(): Observable<NDF[]> {
    return this.http.get<NDF[]>(`${this.backUrl}/all`).pipe(
      tap(ndfs => this.log(`fetched ndfs`)),
      catchError(this.handleError('getNDFS', []))
    );
  }

  getNDF(id: string): Observable<NDF> {
    const url = `${this.backUrl}/${id}`;
    return this.http.get<NDF>(url).pipe(
      tap(_ => this.log(`fetched ndf id=${id}`)),
      catchError(this.handleError<NDF>(`getHero id=${id}`))
    );
  }

  addNDF(ndf: NDF): Observable<NDF> {
    return this.http
      .post<NDF>(`${this.backUrl}/new`, ndf, httpOptions)
      .pipe(
        // tslint:disable-next-line:no-shadowed-variable
        tap((ndf: NDF) => this.log(`added ndf w/ id=${ndf._id}`)),
        catchError(this.handleError<NDF>('addNDF'))
      );
  }

  deleteNDF(ndf: NDF | number): Observable<NDF> {
    const id = typeof ndf === 'number' ? ndf : ndf._id;
    const url = `${this.backUrl}/${id}`;

    return this.http.delete<NDF>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted ndf id=${id}`)),
      catchError(this.handleError<NDF>('deleteNDF'))
    );
  }

  updateNDF(ndf: NDF): Observable<any> {
    return this.http
      .put(`${this.backUrl}/${ndf._id}`, ndf, httpOptions)
      .pipe(
        tap(_ => this.log(`updated ndf id=${ndf._id}`)),
        catchError(this.handleError<any>('updateNDF'))
      );
  }

  searchNDFS(term: string): Observable<NDF[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<NDF[]>(`${this.backUrl}/search/${term}`).pipe(
      tap(_ => this.log(`found ndfs matching "${term}"`)),
      catchError(this.handleError<NDF[]>('searchNDFS', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log('NDFPageService: ' + message);
  }
}
