import { Injectable } from '@angular/core';
import { MainSection } from './main';
import { Observable, of } from 'rxjs';
import { MainDatabaseService } from './main-database.service';
import { MainGroup } from './mainGroup';
import { Section } from './section';
import { Message } from './message';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  constructor(private _DB: MainDatabaseService, ) { }

  public getMainGroup(): Promise<MainGroup[]> {
    return this._DB.getMainGroup();
  }

  public getMains(): Promise<MainSection[]> {
    return this._DB.getMains();
  }

  public getMain(id: number): Promise<MainSection> {
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

  public async addLink(particular: MainSection, sectionIndex: number): Promise<void> {
    if (particular.section[sectionIndex] == null) {
      return;
    }
    const sectionId = particular.section[sectionIndex].id;
    const ms = await this._DB.createMain();
    await this._DB.updateMainToSection(sectionId, ms);
  }


  public async addMessage(particular: MainSection, sectionIndex: number): Promise<void> {
    if (particular.section[sectionIndex] == null) {
      return;
    }
    const sectionId = particular.section[sectionIndex].id;
    const ms = await this._DB.createMessage();
    await this._DB.updateMessageToSection(sectionId, ms);
  }

  // create a new main group, add new  main group to current maingroup list
  public async addMainGroup(): Promise<void> {
    await this._DB.createMainGroup();
    await this._DB.getMainGroup();
  }

  // create a new section, add new section id to this main section's sectionId
  public async addSection(particular: MainSection): Promise<void> {
    if (particular == null) {
      return;
    }
    const newSection = await this._DB.createSection();
    await this._DB.updateSectionToMain(particular.id, newSection);
  }

  public updateGroupName(particular: MainGroup, newname: string): void {
    if (particular == null) {
      return;
    }
    particular.name = newname;
    this._DB.updateMainGroup(particular);
  }

  public updateMainName(particular: MainSection, newname: string): void {
    if (particular == null) {
      return;
    }
    particular.name = newname;
    this._DB.updateMainSection(particular);
  }

  public async updateMessage(particular: Message, newcontent: string): Promise<void> {
    if (particular == null) {
      return;
    }
    particular.content = newcontent;
    await this._DB.updateMessage(particular);
  }

  public async updateTitle(particular: Section, newtitle: string): Promise<void> {
    if (particular == null) {
      return;
    }
    particular.title = newtitle;
    await this._DB.updateSection(particular);
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
    if (particular.section[sectionIndex] == null || messageIndex == null) {
      return;
    }
    let swap: number;
    if (messageIndex > 0) {
      swap = particular.section[sectionIndex].messageId[messageIndex];
      particular.section[sectionIndex].messageId[messageIndex] = particular.section[sectionIndex].messageId[messageIndex - 1];
      particular.section[sectionIndex].messageId[messageIndex - 1] = swap;
    }
    await this._DB.updateSection(particular.section[sectionIndex]);
  }

  public async messageDown(particular: MainSection, sectionIndex: number, messageIndex: number): Promise<void> {
    if (particular.section[sectionIndex] == null || messageIndex == null) {
      return;
    }
    let swap: number;
    if (messageIndex < particular.section[sectionIndex].messageId.length) {
      swap = particular.section[sectionIndex].messageId[messageIndex];
      particular.section[sectionIndex].messageId[messageIndex] = particular.section[sectionIndex].messageId[messageIndex + 1];
      particular.section[sectionIndex].messageId[messageIndex + 1] = swap;
    }
    await this._DB.updateSection(particular.section[sectionIndex]);
  }

  public async linkUp(particular: MainSection, sectionIndex: number, linkIndex: number): Promise<void> {
    if (particular.section[sectionIndex] == null || particular.section[sectionIndex].mainId == null) {
      return;
    }
    let SWAP: number;
    if (linkIndex !== 0) {
      SWAP = particular.section[sectionIndex].mainId[linkIndex];
      particular.section[sectionIndex].mainId[linkIndex] = particular.section[sectionIndex].mainId[linkIndex - 1];
      particular.section[sectionIndex].mainId[linkIndex - 1] = SWAP;
    }
    await this._DB.updateSection(particular.section[sectionIndex]);
  }

  public async linkDown(particular: MainSection, sectionIndex: number, linkIndex: number): Promise<void> {
    if (particular.section[sectionIndex] == null || particular.section[sectionIndex].mainId == null) {
      return;
    }
    let SWAP: number;
    if (linkIndex < particular.section[sectionIndex].main.length) {
      SWAP = particular.section[sectionIndex].mainId[linkIndex];
      particular.section[sectionIndex].mainId[linkIndex] = particular.section[sectionIndex].mainId[linkIndex + 1];
      particular.section[sectionIndex].mainId[linkIndex + 1] = SWAP;
    }
    await this._DB.updateSection(particular.section[sectionIndex]);
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
