import { Injectable } from '@angular/core';
import { MainSection } from './main';
import { Observable, of } from 'rxjs';
import { MainDatabaseService } from './main-database.service';


@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private _DB: MainDatabaseService) { }


  public getMains(): Observable<MainSection[]> {
    return this._DB.getMains();
  }

  public getMain(id: number): Observable<MainSection> {
    return this._DB.getMain(id);
  }

  public addSection(particular: MainSection): void {
    if (particular == null) {
      return;
    }
    const one = this._DB.createSection(particular);
    one.title = 'Please enter the title';

  }

  public updateMainName(particular: MainSection, newname: string): void {
    if (particular == null) {
      return;
    }
    particular.name = newname;
  }

  public updateTitle(particular: MainSection, sectionIndex: number, newtitle: string): void {
    if (particular == null) {
      return;
    }
    particular.section[sectionIndex].title = newtitle;
  }

  public deleteMessage(particular: MainSection, sectionIndex: number, messageIndex: number): void {
    // if ( particular == null) {
    // return;
    // }
    particular.section[sectionIndex].message.splice(messageIndex, 1);
  }

  public deleteLink(particular: MainSection, sectionIndex: number, linkIndex: number): void {
    if (particular.section[sectionIndex].link[linkIndex] == null) {
      return;
    }
    const dog = particular.section[sectionIndex].link[linkIndex].id;
    // delete link from current section
    particular.section[sectionIndex].link.splice(linkIndex, 1);
    // delete link and main from DB
    this._DB.deleteLinkDB(dog);
  }

  public deleteSection(particular: MainSection, sectionIndex: number): void {
    const cat = particular.section[sectionIndex].id;
    particular.section.splice(sectionIndex, 1);
    this._DB.deleteSection(cat);
  }

  public addMessage(particular: MainSection, sectionIndex: number): void {
    if (particular.section[sectionIndex] == null) {
      return;
    }
    if (particular.section[sectionIndex].message == null) {
      // tslint:disable-next-line: no-unused-expression
      particular.section[sectionIndex].message = ['Please enter the message'];

    } else {
      particular.section[sectionIndex].message.push('Please enter the message');
    }
  }

  public addLink(particular: MainSection, sectionIndex: number): void {
    if (particular.section[sectionIndex] == null) {
      return;
    }
    // add the new link to the current section:
    if (particular.section[sectionIndex].link == null)  {
      // tslint:disable-next-line: max-line-length
      particular.section[sectionIndex].link = [this._DB.createLink()];
    } else { particular.section[sectionIndex].link.push(this._DB.createLink()); }
  }

  public updateMessage(particular: MainSection, sectionIndex: number, messageIndex: number, message: string): void {
    if (particular.section[sectionIndex] == null || message == null) {
      return;
    }
    particular.section[sectionIndex].message[messageIndex] = message;
  }

}
