import { Injectable } from '@angular/core';
import { MainSection } from './main';
import { Observable, of } from 'rxjs';
import { Section } from './section';
import { Link } from './link';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
   providedIn: 'root'
})
export class MainDatabaseService {
   private guidelineUrl = 'http://localhost:61291/api/Guideline'; // URL to web api
   private sectionUrl = 'http://localhost:61291/api/Section';
   private linkUrl = 'http://localhost:61291/api/Link';
   private groupUrl = 'http://localhost:61291/api/MainGroup';


   constructor(
      private http: HttpClient,
   ) { }

   public getMains(): Observable<MainSection[]> {
      return this.http.get<MainSection[]>(this.guidelineUrl)
         .pipe(catchError(this.handleError<MainSection[]>('getMains', []))
         );
   }

   /** GET main section by id. Will 404 if id not found */
   public getMain(id: number): Observable<MainSection> {
      const url = `${this.guidelineUrl}/${id}`;
      return this.http.get<MainSection>(url).pipe(
         catchError(this.handleError<MainSection>(`getMain id=${id}`))
      );
   }

   // create a new section and add to MainSectionDB, return the new section
   public createSection(): Observable<Section> {
      const some = new Section();
      return this.http.post<Section>(this.sectionUrl, some, httpOptions).pipe(
         catchError(this.handleError<Section>('createNewSection'))
      );
   }

   /** PUT: update the main section on the server and return a message; */
   public updateMainSection(some: MainSection): Promise<any> {
      const url = `${this.guidelineUrl}/${some.id}`;
      return this.http.put(url, some, httpOptions).toPromise();
   }

   /** PUT: update the section on the server and return a message */
   public updateSection(some: Section): Promise<any> {
      const url = `${this.sectionUrl}/${some.id}`;
      return this.http.put(url, some, httpOptions).toPromise();
   }

   /** PUT: update the link on the server and return a message */
   public updateLink(some: Link): Promise<any> {
      const url = `${this.linkUrl}/${some.id}`;
      return this.http.put(url, some, httpOptions).toPromise();
   }
   /** DELETE: delete link from LinkDB */
   public deleteLinkDB(id: number): Promise<Link> {
      const url = `${this.linkUrl}/${id}`;
      return this.http.delete<Link>(url, httpOptions).toPromise();
   }

   // delete section from SectionDB
   public deleteSection(id: number): Promise<Section> {
      const url = `${this.sectionUrl}/${id}`;
      return this.http.delete<Section>(url, httpOptions).toPromise();
   }

   // create a new link and add to LinkDB, return the new link
   public createLink(): Observable<Link> {
      const some = new Link();
      return this.http.post<Link>(this.linkUrl, some, httpOptions).pipe(
         catchError(this.handleError<Link>('createNewLink'))
      );
   }


   public createMain(): MainSection {
      const main = new MainSection();
      main.id = null;
      main.name = '';
      return main;

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


         // Let the app keep running by returning an empty result.
         return of(result as T);
      };
   }
}