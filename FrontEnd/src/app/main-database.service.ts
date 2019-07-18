import { Injectable } from '@angular/core';
import { Item } from './item';
import { MainSection } from './main';
import { Observable, of } from 'rxjs';
import { Section } from './section';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { MainGroup } from './mainGroup';
import { ItemType } from './ItemType';

const httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
   providedIn: 'root'
})
export class MainDatabaseService {
   private guidelineUrl = 'http://localhost:61291/api/Guideline';
   private sectionUrl = 'http://localhost:61291/api/Section';
   private groupUrl = 'http://localhost:61291/api/MainGroup';
   private itemUrl = 'http://localhost:61291/api/Item';

   constructor(
      private http: HttpClient,
   ) { }
   /** GET maingroup from the server */
   public async getMainGroup(): Promise<MainGroup[]> {
      return this.http.get<MainGroup[]>(this.groupUrl)
         .pipe(catchError(this.handleError<MainGroup[]>('getMaingroup', []))
         ).toPromise();
   }

   /** GET all items from the server */ 
   public async getMains(): Promise<Item[]> {
      return this.http.get<Item[]>(this.itemUrl)
         .pipe(catchError(this.handleError<Item[]>('getItems', []))
         ).toPromise();
   }

   /** GET item by id. Will 404 if id not found */
   public getMain(id: number): Promise<Item> {
      const url = `${this.itemUrl}/${id}`;
      return this.http.get<Item>(url).pipe(
         catchError(this.handleError<Item>(`getMain id=${id}`))
      ).toPromise();
   }

   /** POST create a new item and add to MainDB, return the new main section */
   public createMain(): Promise<MainSection> {
      const some = new MainSection();
      const ns = this.http.post<MainSection>(this.guidelineUrl, some, httpOptions)
         .pipe(
            catchError(this.handleError<MainSection>('createNewMainSection'))
         ).toPromise();
      return ns;
   }

   /** POST create a new maingroup and add to MainGroupDB, return the new maingroup */
   public async createMainGroup(): Promise<MainGroup> {
      return this.http.post<MainGroup>(this.groupUrl, httpOptions).pipe(
         catchError(this.handleError<MainGroup>('createNewSection'))
      ).toPromise();
   }

   /** POST: create a new item and add to item's (id = sectionId) childrenIds */
   public createItemToChildren(parentId: number, type: ItemType): Promise<any> {
      const url = `${this.itemUrl}/${parentId}`;
      return this.http.post(url, type, httpOptions).toPromise();
   }

   /** PUT: update the main section on the server and return a message; */
   public updateItem(item: Item ): Promise<any> {
      const url = `${this.itemUrl}/${item.id}`;
      return this.http.put(url, item, httpOptions).toPromise();
   }

   /** PUT: update the maingroup on the server and return a message; */
   public updateMainGroup(some: MainGroup): Promise<any> {
      const url = `${this.groupUrl}/${some.id}`;
      return this.http.put(url, some, httpOptions).toPromise();
   }

   /** POST: add a main section to current maingroup ; */
   public updateMainToGroup(particular: MainGroup, some: MainSection): Promise<any> {
      const url = `${this.groupUrl}/${particular.id}`;
      return this.http.post(url, some, httpOptions).toPromise();
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

   /** DELETE: delete item from itemDB */
   public async deleteItem(id: number): Promise<Item> {
      const url = `${this.itemUrl}/${id}`;
      return this.http.delete<Item>(url, httpOptions).toPromise();
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
