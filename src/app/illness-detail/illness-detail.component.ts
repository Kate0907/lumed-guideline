import { Component, OnInit, Input } from '@angular/core';
import { Illness } from '../illness';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';

import { IllnessService } from '../illness.service';
import { Section } from '../section';
import { Link } from '../Link';
import { LINK } from '../mock-link';
import { ILLNESSES } from '../mock-illness';
import { SECTIONS } from '../mock-sections';

@Component({
  selector: 'app-illness-detail',
  templateUrl: './illness-detail.component.html',
  styleUrls: ['./illness-detail.component.css']
})
export class IllnessDetailComponent implements OnInit {
  @Input() illness: Illness;
  isAdmin = true;
  lily = LINK;
  alisa = ILLNESSES;
  kevin = SECTIONS;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private illnessService: IllnessService,
    private location: Location
  ) {
       this.router.events.subscribe(navigation => {
      console.log(navigation)
      if (navigation instanceof NavigationEnd && navigation.url.indexOf('detail') !== -1) {
        /*
        const urls = navigation.url.split('/');
        console.log(urls)
        const id = Number(urls[urls.length-1]);
        */
        this.getIllness();
      }
       // this.getIllness(navigation.state.navigationId);
    });

  }

  ngOnInit(): void {
// this.getIllness();
    console.log(this);
  }
  getIllness(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.illnessService.getIllness(id)
      .subscribe(illness => {
         this.illness = illness;
         console.log(id, illness);
        });
  }

  addSection(): void {
    this.illnessService.addSection(this.illness);
  }

  updateIllnessName(newname: string): void {
    this.illnessService.updateIllnessName(this.illness, newname);
  }

  updateTitle(sectionIndex: number, newtitle: string): void {
    this.illnessService.updateTitle(this.illness, sectionIndex, newtitle);
  }

  deleteMessage(sectionIndex: number, messageIndex: number): void {
    this.illnessService.deleteMessage(this.illness, sectionIndex, messageIndex);
  }

  deleteLink(sectionIndex: number, linkIndex: number): void {
    this.illnessService.deleteLink(this.illness, sectionIndex, linkIndex);
 }

 deleteSection(sectionIndex: number): void {
  this.illnessService.deleteSection(this.illness, sectionIndex);
}

  addMessage(sectionIndex: number): void {
    this.illnessService.addMessage(this.illness, sectionIndex);
  }

  addLink(sectionIndex: number): void {
    this.illnessService.addLink(this.illness, sectionIndex);
  }

  updateMessage(sectionIndex: number, messageIndex: number,message: string): void {
    this.illnessService.updateMessage(this.illness, sectionIndex, messageIndex, message );
  }

  goBack(): void {
    this.location.back();
  }
}
