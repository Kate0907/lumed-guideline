import { Injectable } from '@angular/core';
import { MainSection } from './main';
import { Observable, of } from 'rxjs';
import { Section } from './section';
import { Link } from './link';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { MainGroup } from './mainGroup';
import { Message } from './message';

const httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
   providedIn: 'root'
})
export class MainDatabaseService {
   private guidelineUrl = 'http://localhost:61291/api/Guideline';
   private sectionUrl = 'http://localhost:61291/api/Section';
   private linkUrl = 'http://localhost:61291/api/Link';
   private groupUrl = 'http://localhost:61291/api/MainGroup';
   private messageUrl = 'http://localhost:61291/api/Message';

   constructor(
      private http: HttpClient,
   ) { }
   
   /** GET maingroup from the server */
   public async getMainGroup(): Promise<MainGroup[]> {
      return this.http.get<MainGroup[]>(this.groupUrl)
         .pipe(catchError(this.handleError<MainGroup[]>('getMaingroup', []))
         ).toPromise();
   }

   /** GET all main sections from the server */
   public async getMains(): Promise<MainSection[]> {
      return this.http.get<MainSection[]>(this.guidelineUrl)
         .pipe(catchError(this.handleError<MainSection[]>('getMains', []))
         ).toPromise();
   }

   /** GET main section by id. Will 404 if id not found */
   public getMain(id: number): Promise<MainSection> {
      const url = `${this.guidelineUrl}/${id}`;
      return this.http.get<MainSection>(url).pipe(
         catchError(this.handleError<MainSection>(`getMain id=${id}`))
      ).toPromise();
   }

   /** POST create a new main section and add to MainDB, return the new main section */
   public createMain(): Promise<MainSection> {
      console.log('vfghg');
      const some = new MainSection();
      const ns = this.http.post<MainSection>(this.guidelineUrl, some, httpOptions)
         .pipe(
            catchError(this.handleError<MainSection>('createNewMainSection'))
         ).toPromise();
      return ns;
   }

   /** POST create a new maingroup and add to MainGroupDB, return the new maingroup */
   public async createMainGroup(): Promise<MainGroup> {
      const some = new MainGroup();
      return this.http.post<MainGroup>(this.groupUrl, some, httpOptions).pipe(
         catchError(this.handleError<MainGroup>('createNewSection'))
      ).toPromise();
   }

   /** POST:  create a new section and add to MainSectionDB, return the new section */
   public async createSection(): Promise<Section> {
      const some = new Section();
      return this.http.post<Section>(this.sectionUrl, some, httpOptions).pipe(
         catchError(this.handleError<Section>('createNewSection'))
      ).toPromise();
   }

   /** POST: create a new link and add to LinkDB, return the new link  */
   public async createLink(): Promise<Link> {
      const some = new Link();
      return this.http.post<Link>(this.linkUrl, some, httpOptions).pipe(
         catchError(this.handleError<Link>('createNewLink'))
      ).toPromise();
   }

   /** POST: create a new link and add to LinkDB, return the new link  */
   public async createMessage(): Promise<Message> {
      const some = new Message();
      return this.http.post<Message>(this.messageUrl, some, httpOptions).pipe(
         catchError(this.handleError<Message>('createNewMessage'))
      ).toPromise();
   }

   /** PUT: update the main section on the server and return a message; */
   public async updateMainSection(some: MainSection): Promise<any> {
      console.log('gggggg');
      const url = `${this.guidelineUrl}/${some.id}`;
      return this.http.put(url, some, httpOptions).toPromise();
   }

   /** PUT: update the maingroup on the server and return a message; */
   public async updateMainGroup(some: MainGroup): Promise<any> {
      const url = `${this.groupUrl}/${some.id}`;
      return this.http.put(url, some, httpOptions).toPromise();
   }

   /** POST: add a main section to current maingroup on the server; */
   public updateMainToGroup(particular: MainGroup, some: MainSection): Promise<any> {
      const url = `${this.groupUrl}/${particular.id}`;
      return this.http.post(url, some, httpOptions).toPromise();
   }

   /** POST: add a link of main section to current section; */
   public updateMainToSection(sectionId: number, some: MainSection): Promise<any> {
      const url = `${this.sectionUrl}/${sectionId}`;
      return this.http.post(url, some, httpOptions).toPromise();
   }
   /** POST: add a new message to current section; */
   public updateMessageToSection(sectionId: number, some: Message): Promise<any> {
      const url = `${this.messageUrl}/${sectionId}`;
      return this.http.post(url, some, httpOptions).toPromise();
   }

   /** POST: add a new section to current main section; */
   public updateSectionToMain(mainId: number, some: Section): Promise<any> {
      const url = `${this.guidelineUrl}/${mainId}`;
      return this.http.post(url, some, httpOptions).toPromise();
   }

   /** PUT: update the section on the server and return a message */
   public async updateSection(some: Section): Promise<any> {
      const url = `${this.sectionUrl}/${some.id}`;
      return this.http.put(url, some, httpOptions).toPromise();
   }

   /** PUT: update the link on the server and return a message */
   public async updateLink(some: Link): Promise<any> {
      const url = `${this.linkUrl}/${some.id}`;
      return this.http.put(url, some, httpOptions).toPromise();
   }

   /** PUT: update the link on the server and return a message */
   public async updateMessage(some: Message): Promise<any> {
      const url = `${this.messageUrl}/${some.id}`;
      return this.http.put(url, some, httpOptions).toPromise();
   }
   /** DELETE: delete link from LinkDB */
   public async deleteLinkDB(id: number): Promise<Link> {
      const url = `${this.linkUrl}/${id}`;
      return this.http.delete<Link>(url, httpOptions).toPromise();
   }
   /** DELETE: delete a main section from MainSectionDB */
   public deleteMain(id: number): Promise<MainSection> {
      const url = `${this.guidelineUrl}/${id}`;
      return this.http.delete<MainSection>(url, httpOptions).toPromise();
   }

   /** DELETE: delete a main group from MainGroupDB */
   public deleteMainGroup(id: number): Promise<MainGroup> {
      const url = `${this.groupUrl}/${id}`;
      return this.http.delete<MainGroup>(url, httpOptions).toPromise();
   }

   /** DELETE: delete section from SectionDB */
   public async deleteSection(id: number): Promise<Section> {
      const url = `${this.sectionUrl}/${id}`;
      return this.http.delete<Section>(url, httpOptions).toPromise();
   }

   /** DELETE: delete section from SectionDB */
   public async deleteMessage(id: number): Promise<Message> {
      const url = `${this.messageUrl}/${id}`;
      return this.http.delete<Message>(url, httpOptions).toPromise();
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
         // Let the app keep running by returning an empty result.
         return of(result as T);
      };
   }
}
