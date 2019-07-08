import { Component, OnInit, Input } from '@angular/core';
import { MainSection } from '../main';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { MainService } from '../main.service';
import { Message } from '../message';
import { Section } from '../section';

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

  public ngOnInit(): void { }

  public async getMain(): Promise<void> {
    const id = +this.route.snapshot.paramMap.get('id');
    this.main = await this.mainService.getMain(id);
    console.log(id, this.main);
  }

  public async addSection(): Promise<void> {
    await this.mainService.addSection(this.main);
    this.getMain();
  }

  public async addLink(sectionIndex: number): Promise<void> {
    await this.mainService.addLink(this.main, sectionIndex);
    this.getMain();
  }

  public async addMessage(sectionIndex: number): Promise<void> {
    await this.mainService.addMessage(this.main, sectionIndex);
    this.getMain();
  }

  public updateMainName(newname: string): void {
    this.mainService.updateMainName(this.main, newname);
  }

  public updateTitle(section: Section, newtitle: string): void {
    this.mainService.updateTitle(section, newtitle);
  }

  public async deleteMessage(mainId: number): Promise<void> {
    await this.mainService.deleteMessage(mainId);
    this.getMain();
  }

  public async deleteLink(mainId: number): Promise<void> {
    await this.mainService.deleteMain(mainId);
    this.getMain();
  }

  public async deleteSection(sectionId: number): Promise<void> {
    await this.mainService.deleteSection(sectionId);
    this.getMain();
  }

  public async updateMessage(message: Message, newContent: string): Promise<void> {
    await this.mainService.updateMessage(message, newContent);
    this.getMain();
  }

  public async messageUp(particular: MainSection, sectionIndex: number, messageIndex: number): Promise<void> {
    await this.mainService.messageUp(particular, sectionIndex, messageIndex);
    this.getMain();
  }

  public async messageDown(sectionIndex: number, messageIndex: number): Promise<void> {
    await this.mainService.messageDown(this.main, sectionIndex, messageIndex);
    this.getMain();
  }

  public async linkUp(sectionIndex: number, linkIndex: number): Promise<void> {
    await this.mainService.linkUp(this.main, sectionIndex, linkIndex);
    this.getMain();
  }

  public async linkDown(sectionIndex: number, linkIndex: number): Promise<void> {
    await this.mainService.linkDown(this.main, sectionIndex, linkIndex);
    this.getMain();
  }

  public goBack(): void {
    this.location.back();
  }
}

