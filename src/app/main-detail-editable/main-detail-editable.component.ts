import { Component, OnInit, Input } from '@angular/core';
import { MainSection } from '../main';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { MainService } from '../main.service';

@Component({
  selector: 'app-main-detail-editable',
  templateUrl: './main-detail-editable.component.html',
  styleUrls: ['./main-detail-editable.component.css']
})
export class MainDetailEditableComponent implements OnInit {
  @Input() public main: MainSection;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mainService: MainService,
    private location: Location) {
    this.router.events.subscribe(navigation => {
      console.log(navigation);
      if (navigation instanceof NavigationEnd && navigation.url.indexOf('detail') !== -1) {
        this.getMain();
      }
    });
  }

  ngOnInit(): void { }
  public getMain(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.mainService.getMain(id)
      .subscribe(main => {
        this.main = main;
      });
  }

  public addSection(): void {
    this.mainService.addSection(this.main);
  }

  public addLink(sectionIndex: number): void {
    this.mainService.addLink(this.main, sectionIndex);
  }

  public updateMainName(newname: string): void {
    this.mainService.updateMainName(this.main, newname);
  }

  public updateTitle(sectionIndex: number, newtitle: string): void {
    this.mainService.updateTitle(this.main, sectionIndex, newtitle);

  }

  public deleteMessage(sectionIndex: number, messageIndex: number): void {
    this.mainService.deleteMessage(this.main, sectionIndex, messageIndex);
  }

  public deleteLink(sectionIndex: number, linkIndex: number): void {
    this.mainService.deleteLink(this.main, sectionIndex, linkIndex);
  }

  public deleteSection(sectionIndex: number): void {
    this.mainService.deleteSection(this.main, sectionIndex);
  }

  public addMessage(sectionIndex: number): void {
    this.mainService.addMessage(this.main, sectionIndex);
  }

  public updateMessage(sectionIndex: number, messageIndex: number, message: string): void {
    this.mainService.updateMessage(this.main, sectionIndex, messageIndex, message);
  }

  public messageUp(sectionIndex: number, messageIndex: number): void {
    this.mainService.messageUp(this.main, sectionIndex, messageIndex);
  }

  public messageDown(sectionIndex: number, messageIndex: number): void {
    this.mainService.messageDown(this.main, sectionIndex, messageIndex);
  }

  public linkUp(sectionIndex: number, linkIndex: number): void {
    this.mainService.linkUp(this.main, sectionIndex, linkIndex);
  }

  public linkDown(sectionIndex: number, linkIndex: number): void {
    this.mainService.linkDown(this.main, sectionIndex, linkIndex);
  }

  public goBack(): void {
    this.location.back();
  }
}

