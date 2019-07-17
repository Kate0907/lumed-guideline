import { Injectable } from '@angular/core';
import { MainSection } from './main';
import { Observable, of } from 'rxjs';
import { MainDatabaseService } from './main-database.service';
import { MainGroup } from './mainGroup';
import { Section } from './section';
import { Message } from './message';
import { Item } from './item';
import { ItemType } from './ItemType';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  constructor(private _DB: MainDatabaseService, ) { }

  public getMainGroup(): Promise<MainGroup[]> {
    return this._DB.getMainGroup();
  }

  public getMains(): Promise<Item[]> {
    return this._DB.getMains();
  }

  public getMain(id: number): Promise<Item> {
    return this._DB.getMain(id);
  }

  // create a new main section, add new  main section id to this main group's samemainsIds
  public async addMain(particular: MainGroup): Promise<MainSection> {
    if (particular == null) {
      return;
    }
    const newMain = await this._DB.createMain();
    await this._DB.updateMainToGroup(particular, newMain);
    return newMain;
  }

  public async addLink(id: number, type: ItemType): Promise<void> {
    await this._DB.createItemToChildren(id, type);
  }

  public async addMessage(id: number, type: ItemType): Promise<void> {
    await this._DB.createItemToChildren(id, type);
  }

   // create a new section, add new section id to this main section's sectionId
   public async addSection(id: number, type: ItemType): Promise<void> {
    await this._DB.createItemToChildren(id, type);
  }

  // create a new main group, add new  main group to current maingroup list
  public async addMainGroup(): Promise<void> {
    await this._DB.createMainGroup();
  }

  public async updateGroupName(particular: MainGroup, newname: string): Promise<void> {
    if (particular == null) {
      return;
    }
    particular.name = newname;
    await this._DB.updateMainGroup(particular);
  }

  public async updateMainName(some: Item): Promise<void> {
    await this._DB.updateItemName(some);
  }

  public async updateMessage(some: Item): Promise<void> {
    await this._DB.updateItemName(some);
  }

  public async updateTitle(some: Item): Promise<void> {
    await this._DB.updateItemName(some);
  }

  public async deleteMessage(mainId: number) {
    await this._DB.deleteMessage(mainId);
  }

  public async deleteGroup(eachgroup: MainGroup) {
    await this._DB.deleteMainGroup(eachgroup.id);
  }

  public async deleteMain(mainId: number) {
    await this._DB.deleteMain(mainId);
  }

  public async deleteSection(sectionId: number): Promise<void> {
    await this._DB.deleteSection(sectionId);
  }

  public async messageUp(particular: MainSection, sectionIndex: number, messageIndex: number): Promise<void> {
    if (particular.sections[sectionIndex] == null || messageIndex == null) {
      return;
    }
    let swap: number;
    if (messageIndex > 0) {
      swap = particular.sections[sectionIndex].messageIds[messageIndex];
      particular.sections[sectionIndex].messageIds[messageIndex] = particular.sections[sectionIndex].messageIds[messageIndex - 1];
      particular.sections[sectionIndex].messageIds[messageIndex - 1] = swap;
    }
    await this._DB.updateSection(particular.sections[sectionIndex]);
  }

  public async messageDown(particular: MainSection, sectionIndex: number, messageIndex: number): Promise<void> {
    if (particular.sections[sectionIndex] == null || messageIndex == null) {
      return;
    }
    let swap: number;
    if (messageIndex < particular.sections[sectionIndex].messageIds.length) {
      swap = particular.sections[sectionIndex].messageIds[messageIndex];
      particular.sections[sectionIndex].messageIds[messageIndex] = particular.sections[sectionIndex].messageIds[messageIndex + 1];
      particular.sections[sectionIndex].messageIds[messageIndex + 1] = swap;
    }
    await this._DB.updateSection(particular.sections[sectionIndex]);
  }

  public async linkUp(particular: MainSection, sectionIndex: number, linkIndex: number): Promise<void> {
    if (particular.sections[sectionIndex] == null || particular.sections[sectionIndex].mainIds == null) {
      return;
    }
    let SWAP: number;
    if (linkIndex !== 0) {
      SWAP = particular.sections[sectionIndex].mainIds[linkIndex];
      particular.sections[sectionIndex].mainIds[linkIndex] = particular.sections[sectionIndex].mainIds[linkIndex - 1];
      particular.sections[sectionIndex].mainIds[linkIndex - 1] = SWAP;
    }
    await this._DB.updateSection(particular.sections[sectionIndex]);
  }

  public async linkDown(particular: MainSection, sectionIndex: number, linkIndex: number): Promise<void> {
    if (particular.sections[sectionIndex] == null || particular.sections[sectionIndex].mainIds == null) {
      return;
    }
    let SWAP: number;
    if (linkIndex < particular.sections[sectionIndex].mains.length) {
      SWAP = particular.sections[sectionIndex].mainIds[linkIndex];
      particular.sections[sectionIndex].mainIds[linkIndex] = particular.sections[sectionIndex].mainIds[linkIndex + 1];
      particular.sections[sectionIndex].mainIds[linkIndex + 1] = SWAP;
    }
    await this._DB.updateSection(particular.sections[sectionIndex]);
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
