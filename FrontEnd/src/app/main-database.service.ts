import { Injectable } from '@angular/core';
import { Item } from './item';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, } from 'rxjs/operators';
import { ItemType } from './ItemType';

const httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
   providedIn: 'root'
})
export class MainDatabaseService {
   private itemUrl = 'http://localhost:61291/api/Item';

   constructor(
      private http: HttpClient,
   ) { }

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

   /** POST: create a new item and add to parent item's (id = parentId) childrenIds */
   public createItemToChildren(parentId: number, type: ItemType): Promise<any> {
      const url = `${this.itemUrl}/${parentId}`;
      return this.http.post(url, type, httpOptions).toPromise();
   }

   /** POST: create a new item and add to parent item's (id = parentId) childrenIds */
   public createItem(type: ItemType): Promise<any> {
      return this.http.post(this.itemUrl, type, httpOptions).toPromise();
   }

   /** PUT: update the main section on the server and return a message; */
   public updateItem(item: Item): Promise<any> {
      const url = `${this.itemUrl}/${item.id}`;
      return this.http.put(url, item, httpOptions).toPromise();
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
