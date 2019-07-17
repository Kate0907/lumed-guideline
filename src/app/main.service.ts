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
    if (particular.sections[sectionIndex] == null) {
      return;
    }
    const sectionId = particular.sections[sectionIndex].id;
    await this._DB.createMainToSection(sectionId);
  }


  public async addMessage(particular: MainSection, sectionIndex: number): Promise<void> {
    if (particular.sections[sectionIndex] == null) {
      return;
    }
    const sectionId = particular.sections[sectionIndex].id;
    // const ms = await this._DB.createMessage();
    await this._DB.createMessageToSection(sectionId);
  }

  // create a new main group, add new  main group to current maingroup list
  public async addMainGroup(): Promise<void> {
    await this._DB.createMainGroup();
  }

  // create a new section, add new section id to this main section's sectionId
  public async addSection(particular: MainSection): Promise<void> {
    if (particular == null) {
      return;
    }
    await this._DB.createSectionToMain(particular);
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
