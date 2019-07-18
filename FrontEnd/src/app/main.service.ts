import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MainDatabaseService } from './main-database.service';
import { Item } from './item';
import { ItemType } from './ItemType';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  constructor(private _DB: MainDatabaseService, ) { }

  public getMains(): Promise<Item[]> {
    return this._DB.getMains();
  }

  public getMain(id: number): Promise<Item> {
    return this._DB.getMain(id);
  }

  public async addItemNoParent(type: ItemType): Promise<void> {
    await this._DB.createItem(type);
  }

  public async addItem(parentId: number, type: ItemType): Promise<void> {
    await this._DB.createItemToChildren(parentId, type);
  }

  public async updateItem(item: Item): Promise<void> {
    await this._DB.updateItem(item);
  }

  public async deleteItem(itemId: number): Promise<void> {
    await this._DB.deleteItem(itemId);
  }

  public async itemUp(section: Item, itemIndex: number): Promise<void> {
    if (section.childrenIds[itemIndex] == null || itemIndex == null) {
      return;
    }
    let swap: number;
    if (itemIndex > 0) {
      swap = section.childrenIds[itemIndex];
      section.childrenIds[itemIndex] = section.childrenIds[itemIndex - 1];
      section.childrenIds[itemIndex - 1] = swap;
    }
    await this._DB.updateItem(section);
  }

  public async itemDown(section: Item, itemIndex: number): Promise<void> {
    if (section.childrenIds[itemIndex] == null || itemIndex == null) {
      return;
    }
    let swap: number;
    if (itemIndex < section.childrenIds.length - 1) {
      swap = section.childrenIds[itemIndex];
      section.childrenIds[itemIndex] = section.childrenIds[itemIndex + 1];
      section.childrenIds[itemIndex + 1] = swap;
    }
    await this._DB.updateItem(section);
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
