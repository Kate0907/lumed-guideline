import { Injectable } from '@angular/core';
import { MainSection } from './main';
import { Observable, of } from 'rxjs';
import { MainDatabaseService } from './main-database.service';
import { MainGroup } from './mainGroup';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Link } from './link';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private mainGroupUrl = 'http://localhost:61291/api/MainGroup';

  constructor(private _DB: MainDatabaseService,
    private http: HttpClient, ) { }

  public getMainGroup(): Observable<MainGroup[]> {
    return this._DB.getMainGroup();
  }

  public getMains(): Observable<MainSection[]> {
    return this._DB.getMains();
  }

  public getMain(id: number): Observable<MainSection> {
    return this._DB.getMain(id);
  }

  // create a new main section, add new  main section id to this main group's samemainsIds
  public addMain(particular: MainGroup): void {
    if (particular == null) {
      return;
    }
    // create a new main section
    const newMain = this._DB.createMain();
    // get the new main section's id
    newMain.subscribe(a => {
      const id = a.id;
      particular.samemainsIds.push(id);
      particular.samemains.push(a);
      this._DB.updateMainGroup(particular);
    });
  }

  public addLink(particular: MainSection, sectionIndex: number): void {
    if (particular.section[sectionIndex] == null) {
      return;
    }
    const ms = this._DB.createMain();
    ms.subscribe(a => {
      const id = a.id;
      if(particular.section[sectionIndex].mainId == null) {
        particular.section[sectionIndex].mainId = [id];
      }
      else {
        particular.section[sectionIndex].mainId.push(id);
        particular.section[sectionIndex].main.push(a);
        this._DB.updateSection(particular.section[sectionIndex]);
      }
    });
  }

/**   public addLink(particular: MainSection, sectionIndex: number): void {
    if (particular.section[sectionIndex] == null) {
      return;
    }
    // create a new link add the new link to the current section:
    const link = this._DB.createLink();
    // get new section's id:
    link.subscribe(a => {
      const id = a.id;
      // add this id to this section's linkId
      if (particular.section[sectionIndex].linkId == null) {
        particular.section[sectionIndex].linkId = [id];
      } else {
        particular.section[sectionIndex].linkId.push(id);
        particular.section[sectionIndex].link.push(a);
        this._DB.updateSection(particular.section[sectionIndex]);
        this._DB.updateMainSection(particular);
      }
    });
  }*/

    // create a new main group, add new  main group to current maingroup list
    public addMainGroup(maingroup: MainGroup[]): void {
      const newGroup = this._DB.createMainGroup();
      newGroup.subscribe(a => { maingroup.push(a);
      });
    }


  // create a new section, add new section id to this main section's sectionId
  public addSection(particular: MainSection): void {
    if (particular == null) {
      return;
    }
    // create a new section
    const newSection = this._DB.createSection();
    // get the new section's id
    newSection.subscribe(a => {
      const id = a.id;
      // add this new section id to this MainSection's SectionId
      particular.sectionId.push(id);
      particular.section.push(a);
      this._DB.updateMainSection(particular);
    });
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

  public updateTitle(particular: MainSection, sectionIndex: number, newtitle: string): void {
    if (particular == null) {
      return;
    }
    particular.section[sectionIndex].title = newtitle;
    this._DB.updateSection(particular.section[sectionIndex]);
  }

  public deleteMessage(particular: MainSection, sectionIndex: number, messageIndex: number): void {
    particular.section[sectionIndex].message.splice(messageIndex, 1);
    this._DB.updateSection(particular.section[sectionIndex]);
  }

  public deleteMain(particular: MainSection, sameIndex: number,eachgroup: MainGroup) {
    if (eachgroup == null) {
      return;
    }
    eachgroup.samemains.splice(sameIndex, 1);
    for (let i = 0; i < eachgroup.samemainsIds.length; i++) {
      if (eachgroup.samemainsIds[i] === particular.id) {
        eachgroup.samemainsIds.splice(i, 1);
      }
    }
    this._DB.updateMainGroup(eachgroup);
    this._DB.deleteMain(particular.id);
  }

    public deleteLink(particular: MainSection, sectionIndex: number, linkIndex: number): void {
    if (particular.section[sectionIndex].mainId[linkIndex] == null) {
      return;
    }
    const linkId = particular.section[sectionIndex].mainId[linkIndex];
    particular.section[sectionIndex].main.splice(linkIndex, 1);
    for (let i = 0; i < particular.section[sectionIndex].mainId.length; i++) {
      if (particular.section[sectionIndex].mainId[i] === linkId) {
        particular.section[sectionIndex].mainId.splice(i, 1);
      }
    }
    this._DB.updateSection(particular.section[sectionIndex]);
    this._DB.updateMainSection(particular);
    this._DB.deleteMain(linkId);
  }

  /** public deleteLink(particular: MainSection, sectionIndex: number, linkIndex: number): void {
    if (particular.section[sectionIndex].linkId[linkIndex] == null) {
      return;
    }
    const linkId = particular.section[sectionIndex].linkId[linkIndex];
    particular.section[sectionIndex].link.splice(linkIndex, 1);
    for (let i = 0; i < particular.section[sectionIndex].linkId.length; i++) {
      if (particular.section[sectionIndex].linkId[i] === linkId) {
        particular.section[sectionIndex].linkId.splice(i, 1);
      }
    }
    this._DB.updateSection(particular.section[sectionIndex]);
    this._DB.updateMainSection(particular);
    this._DB.deleteLinkDB(linkId);
  }*/

  public deleteSection(particular: MainSection, sectionIndex: number): void {
    const cat = particular.section[sectionIndex].id;
    particular.section.splice(sectionIndex, 1);
    for (let i = 0; i < particular.sectionId.length; i++) {
      if (particular.sectionId[i] === cat) {
        particular.sectionId.splice(i, 1);
      }
    }
    this._DB.updateMainSection(particular);
    this._DB.deleteSection(cat);
  }

  public addMessage(particular: MainSection, sectionIndex: number): void {
    if (particular.section[sectionIndex] == null) {
      return;
    }
    if (particular.section[sectionIndex].message == null) {
      particular.section[sectionIndex].message = ['Please enter the message'];
    } else {
      particular.section[sectionIndex].message.push('Please enter the message');
    }
    this._DB.updateSection(particular.section[sectionIndex]);
  }

  public updateMessage(particular: MainSection, sectionIndex: number, messageIndex: number, message: string): void {
    if (particular.section[sectionIndex] == null || message == null) {
      return;
    }
    particular.section[sectionIndex].message[messageIndex] = message;
    this._DB.updateSection(particular.section[sectionIndex]);
  }

  public messageUp(particular: MainSection, sectionIndex: number, messageIndex: number): void {
    if (particular.section[sectionIndex] == null || messageIndex == null) {
      return;
    }
    let SWAP: string;
    if (messageIndex !== 0) {
      SWAP = particular.section[sectionIndex].message[messageIndex];
      particular.section[sectionIndex].message[messageIndex] = particular.section[sectionIndex].message[messageIndex - 1];
      particular.section[sectionIndex].message[messageIndex - 1] = SWAP;
    }
    this._DB.updateSection(particular.section[sectionIndex]);
  }

  public messageDown(particular: MainSection, sectionIndex: number, messageIndex: number): void {
    if (particular.section[sectionIndex] == null || messageIndex == null) {
      return;
    }
    let SWAP: string;
    if (messageIndex !== particular.section[sectionIndex].message.length - 1) {
      SWAP = particular.section[sectionIndex].message[messageIndex];
      particular.section[sectionIndex].message[messageIndex] = particular.section[sectionIndex].message[messageIndex + 1];
      particular.section[sectionIndex].message[messageIndex + 1] = SWAP;
    }
    this._DB.updateSection(particular.section[sectionIndex]);
  }

  public linkUp(particular: MainSection, sectionIndex: number, linkIndex: number): void {
    if (particular.section[sectionIndex] == null || particular.section[sectionIndex].mainId == null) {
      return;
    }
    let SWAP: number;
    if (linkIndex !== 0) {
      SWAP = particular.section[sectionIndex].mainId[linkIndex];
      particular.section[sectionIndex].mainId[linkIndex] = particular.section[sectionIndex].mainId[linkIndex - 1];
      particular.section[sectionIndex].mainId[linkIndex - 1] = SWAP;
    }

    let SSSS: MainSection;
    if (linkIndex !== 0) {
      SSSS = particular.section[sectionIndex].main[linkIndex];
      particular.section[sectionIndex].main[linkIndex] = particular.section[sectionIndex].main[linkIndex - 1];
      particular.section[sectionIndex].main[linkIndex - 1] = SSSS;
    }
    this._DB.updateSection(particular.section[sectionIndex]);
  }

  public linkDown(particular: MainSection, sectionIndex: number, linkIndex: number): void {
    if (particular.section[sectionIndex] == null || particular.section[sectionIndex].mainId == null) {
      return;
    }
    let SWAP: number;
    if (linkIndex !== particular.section[sectionIndex].main.length - 1) {
      SWAP = particular.section[sectionIndex].mainId[linkIndex];
      particular.section[sectionIndex].mainId[linkIndex] = particular.section[sectionIndex].mainId[linkIndex + 1];
      particular.section[sectionIndex].mainId[linkIndex + 1] = SWAP;
    }

    let SSSS: MainSection;
    if (linkIndex !== particular.section[sectionIndex].main.length - 1) {
      SSSS = particular.section[sectionIndex].main[linkIndex];
      particular.section[sectionIndex].main[linkIndex] = particular.section[sectionIndex].main[linkIndex + 1];
      particular.section[sectionIndex].main[linkIndex + 1] = SSSS;
    }
    this._DB.updateSection(particular.section[sectionIndex]);
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

      // TODO: better job of transforming error for user consumption


      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
