import { Injectable } from '@angular/core';
import { MainSection } from './main';
import { MAINS } from './mock-mainsection';
import { Observable, of } from 'rxjs';
import { Section } from './section';
import { Link } from './link';
import { LINK } from './mock-link';
import { SECTIONS } from './mock-sections';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
 };

@Injectable({
   providedIn: 'root'
})
export class MainDatabaseService {
   private guidelineUrl = 'http://localhost:64796/api/Guidline'; // URL to web api
  constructor(
    private http: HttpClient,
    ) { }


   public getMains(): Observable<MainSection[]> {
      return of(MAINS);
   }

   /** public getMains(): Observable<MainSection[]> {
      return this.http.get<MainSection[]>(this.guidelineUrl);
    }*/

   public getMain(id: number): Observable<MainSection> {
      return of(MAINS.find(those => those.id === id));
   }

   // create a new section and add to current Main
   public createSection(some: MainSection): Section {
      const one = new Section();
      const total = SECTIONS.length - 1;
      one.id = SECTIONS[total].id + 1;
      one.title = '';
      one.message = null;
      one.link = null;
      // add new section to current Main
      // some.section.push(one);
      // add new section to mock SECTIONS
      SECTIONS.push(one);
      // add new section to mock MainES = add section to current Main
      const thisill = MAINS.find(Main => Main.id === some.id);
      if (thisill.section == null) {
         thisill.section = [one];
      } else {
         thisill.section.push(one);
      }

      return one;
   }

   public deleteLinkDB(ID: number) {
      // delete link from mock LINK
      const thislink = LINK.find(link => link.id === ID);
      const thisIndex = LINK.indexOf(thislink);
      LINK.splice(thisIndex, 1);
      // delete link related Main from mock MainES
      const thisMain = MAINS.find(Main => Main.id === ID);
      const Mainindex = MAINS.indexOf(thisMain);
      MAINS.splice(Mainindex, 1);
   }

   public deleteSection(id: number) {
      const thissection = SECTIONS.find(section => section.id === id);
      const thisIndex = SECTIONS.indexOf(thissection);
      SECTIONS.splice(thisIndex, 1);
   }
   public createLink(): Link {
      // create a new link & add to LINK
      const total = LINK.length - 1;
      const emptylink = new Link();
      emptylink.id = LINK[total].id + 1;

      // create a new Main and match new Main.id = this new link.id:
      const newly = this.createIll();
      newly.id = emptylink.id;
      newly.name = 'Pleas enter a name';
      MAINS.push(newly);
      // create an empty section and add to new Main
      this.createSection(newly);
      emptylink.name = newly.name;
      // add the new link to mock LINK:
      LINK.push(emptylink);
      // add the new  Main to mock MainES:
      // MainES.push(newly);
      return (emptylink);
   }

   public createIll(): MainSection {
      const newill = new MainSection();
      newill.id = null;
      newill.name = '';
      return newill;

   }

   /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
   return (error: any): Observable<T> => {
 
     // TODO: send the error to remote logging infrastructure
     console.error(error); // log to console instead
 
     // TODO: better job of transforming error for user consumption
    
 
     // Let the app keep running by returning an empty result.
     return of(result as T);
   };
 }
}
