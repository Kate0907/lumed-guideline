import { Injectable } from '@angular/core';
import { Illness } from './illness';
import { ILLNESSES } from './mock-illness';
import { Observable, of } from 'rxjs';
import { Section } from './section';
import { Link } from './Link';
import { LINK } from './mock-link';
import { SECTIONS } from './mock-sections';




@Injectable({
    providedIn: 'root'
  })
  export class IllnessDatabaseService {
    getIllnesses(): Observable<Illness[]> {
        return of(ILLNESSES);
      }

    getIllness(id: number): Observable<Illness> {
        return of(ILLNESSES.find(illness => illness.id === id));
      }

    // create a new section and add to current illness
    createSection(some: Illness): Section {
        const one = new Section();
        const total = SECTIONS.length - 1;
        one.id = SECTIONS[total].id + 1;
        one.title = '';
        one.message = null;
        one.link = null;
        // add new section to current illness
        // some.section.push(one);
        // add new section to mock SECTIONS
        SECTIONS.push(one);
        // add new section to mock ILLNESSES = add section to current illness
        const thisill = ILLNESSES.find(illness => illness.id === some.id);
        const index = ILLNESSES.indexOf(thisill);
        if (ILLNESSES[index].section === undefined) {
            ILLNESSES[index].section = [one]; } else { ILLNESSES[index].section.push(one); }

        return one;
     }

     deleteLinkDB(ID: number) {
        // delete link from mock LINK
        const thislink = LINK.find(link => link.id === ID );
        const thisIndex = LINK.indexOf(thislink);
        LINK.splice(thisIndex, 1 );
        // delete link related illness from mock ILLNESSES
        const thisillness = ILLNESSES.find(illness => illness.id === ID );
        const illnessindex = ILLNESSES.indexOf(thisillness);
        ILLNESSES.splice(illnessindex, 1 );
     }

     deleteSection(id: number) {
        const thissection = SECTIONS.find(section => section.id === id );
        const thisIndex = SECTIONS.indexOf(thissection);
        SECTIONS.splice(thisIndex, 1 );
     }
     createLink(): Link {
        // create a new link & add to LINK
        const total = LINK.length - 1;
        const emptylink = new Link();
        emptylink.id = LINK[total].id + 1;

        // create a new illness and match new illness.id = this new link.id:
        const newly = this.createIll();
        newly.id = emptylink.id;
        newly.name = 'Pleas enter a name';
        ILLNESSES.push(newly);
        // create an empty section and add to new illness
        this.createSection(newly);
        emptylink.name = newly.name;
        // add the new link to mock LINK:
        LINK.push(emptylink);
        // add the new  illness to mock ILLNESSES:
        //ILLNESSES.push(newly);
        return(emptylink);
     }

     createIll(): Illness {
        const newill = new Illness();
        newill.id = null;
        newill.name = '';
        return newill;

     }
  }
