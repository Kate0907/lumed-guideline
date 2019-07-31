import { Injectable } from '@angular/core';
import { GuidelineHttpService } from './main-database.service';
import { Item } from './item';
import { ItemType } from './ItemType';

@Injectable({
  providedIn: 'root'
})
export class GuidelineItemService {
  constructor(private _DB: GuidelineHttpService, ) { }

  public getAllItems(): Promise<Item[]> {
    return this._DB.getAllItems();
  }

  public getOneItem(id: number): Promise<Item> {
    return this._DB.getOneItem(id);
  }

  public async addItemNoParent(type: ItemType): Promise<Item> {
    return await this._DB.createItem(type);
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

  public async saveToJson(): Promise<void> {
    await this._DB.saveToJson();
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
}
