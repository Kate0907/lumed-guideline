import { Injectable } from '@angular/core';
import { Item } from './item';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, } from 'rxjs/operators';
import { ItemType } from './ItemType';
import { User } from './user';
import { environment } from './../environments/environment';

const httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
   providedIn: 'root'
})
export class GuidelineHttpService {

   private itemUrl = environment.apiUrl + '/api/Item';
   private jsonUrl = environment.apiUrl + '/api/Json';
   private userUrl = environment.apiUrl + '/api/User';

   constructor(
      private http: HttpClient,
   ) { }

   /** GET all items from the server */
   public async getAllItems(): Promise<Item[]> {
      return this.http.get<Item[]>(this.itemUrl)
         .pipe(catchError(this.handleError<Item[]>('getItems', []))
         ).toPromise();
   }

   /** GET item by id. Will 404 if id not found */
   public getOneItem(id: number): Promise<Item> {
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

   /** POST: create a new item without parent  */
   public createItem(type: ItemType): Promise<Item> {
      return this.http.post<Item>(this.itemUrl, type, httpOptions).toPromise<Item>();
   }

   /** POST: login a user */
   public login(user: User): Promise<any> {
      return this.http.post(this.userUrl, user, httpOptions).toPromise();
   }

   /** PUT: update the main section on the server and return a message; */
   public updateItem(item: Item): Promise<any> {
      const url = `${this.itemUrl}/${item.id}`;
      return this.http.put(url, item, httpOptions).toPromise();
   }

   public async saveToJson(): Promise<Item> {
      return this.http.get<Item>(this.jsonUrl, httpOptions).toPromise();
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
         console.error(error);
         return of(result as T);
      };
   }
}
