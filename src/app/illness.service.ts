import { Injectable } from '@angular/core';
import { Illness } from './illness';
import { Observable, of } from 'rxjs';
import { IllnessDatabaseService } from './illness-database.service';
import { Section } from './section';
import { SECTIONS } from './mock-sections';

@Injectable({
  providedIn: 'root'
})
export class IllnessService {

  constructor(private _DB: IllnessDatabaseService) { }


  getIllnesses(): Observable<Illness[]> {
    return this._DB.getIllnesses();
  }

  getIllness(id: number): Observable<Illness> {
    return this._DB.getIllness(id);
  }

  addSection(particular: Illness): void {
    if ( particular == null) {
      return;
    }
    const one = this._DB.createSection(particular);
    one.title = 'Please enter the title';

  }

  updateIllnessName(particular: Illness, newname: string): void {
  if (particular == null) {
    return;
  }
  particular.name = newname;
}

  updateTitle(particular: Illness, sectionIndex: number, newtitle: string): void {
  if ( particular === null || undefined) {
    return;
  }
  particular.section[sectionIndex].title = newtitle;
}

  deleteMessage(particular: Illness, sectionIndex: number, messageIndex: number): void {
  // if ( particular == null) {
   // return;
  // }
  particular.section[sectionIndex].message.splice(messageIndex, 1);
}

  deleteLink(particular: Illness, sectionIndex: number, linkIndex: number): void {
  if (particular.section[sectionIndex].link[linkIndex] === undefined) {
    return;
  }
  const dog = particular.section[sectionIndex].link[linkIndex].id;
// delete link from current section
  particular.section[sectionIndex].link.splice(linkIndex, 1);
// delete link and illness from DB
  this._DB.deleteLinkDB(dog);
}

deleteSection(particular: Illness, sectionIndex: number): void {
  const cat = particular.section[sectionIndex].id;
  particular.section.splice(sectionIndex, 1 );
  this._DB.deleteSection(cat);
}

addMessage(particular: Illness, sectionIndex: number): void {
  if (particular.section[sectionIndex] === undefined) {
    return;
  }
  if ( particular.section[sectionIndex].message === null) {
// tslint:disable-next-line: no-unused-expression
    particular.section[sectionIndex].message = ['Please enter the message'];

  } else {
  particular.section[sectionIndex].message.push('Please enter the message'); }
}

addLink(particular: Illness, sectionIndex: number): void {
  if (particular.section[sectionIndex] === undefined) {
    return;
  }
// add the new link to the current section:
  if (( particular.section[sectionIndex].link === null ) || ( particular.section[sectionIndex].link === undefined )) {
// tslint:disable-next-line: max-line-length
    particular.section[sectionIndex].link = [this._DB.createLink()]; } else {particular.section[sectionIndex].link.push(this._DB.createLink()); }
}

updateMessage(particular: Illness, sectionIndex: number, messageIndex: number, message: string): void {
  if (particular.section[sectionIndex] === undefined || message === undefined) {
    return;
  }
  particular.section[sectionIndex].message[messageIndex] = message;
}

}
