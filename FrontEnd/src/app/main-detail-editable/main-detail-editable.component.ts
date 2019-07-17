import { Component, OnInit, Input } from '@angular/core';
import { MainSection } from '../main';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { MainService } from '../main.service';
import { Message } from '../message';
import { Section } from '../section';
import { Item } from '../item';
import { ItemType } from '../ItemType';


@Component({
  selector: 'app-main-detail-editable',
  templateUrl: './main-detail-editable.component.html',
  styleUrls: ['./main-detail-editable.component.css']
})
export class MainDetailEditableComponent implements OnInit {
  @Input() public main: Item;
  @Input() public mains: Item[];

  public readonly itemType = ItemType;

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

  public ngOnInit(): void {
    this.getMains();
  }

  public async getMain(): Promise<void> {
    const id = +this.route.snapshot.paramMap.get('id');
    this.main = await this.mainService.getMain(id);
    console.log(id, this.main);
  }

  public async getMains(): Promise<void> {
    this.mains = await this.mainService.getMains();
  }

  public getMainById(id: number): Item {
    return this.mains.find(main => main.id === id);
  }

  public async addSection(): Promise<void> {
    const type = this.itemType.Link;
    await this.mainService.addSection(this.main.id, type);
    this.getMain();
  }

  public async addLink(id: number): Promise<void> {
    const type = this.itemType.Link;
    await this.mainService.addLink(id, type);
    this.getMain();
  }

  public async addMessage(id: number): Promise<void> {
    const type = this.itemType.Message;
    await this.mainService.addMessage(id, type);
    this.getMain();
  }

  public async updateMainName(some: Item): Promise<void> {
    await this.mainService.updateMainName(some);
    await this.getMains();
    await this.getMain();
  }

  public async updateTitle(some: Item): Promise<void> {
    await this.mainService.updateTitle(some);
  }

  public async updateMessage(some: Item): Promise<void> {
    await this.mainService.updateMessage(some);
    this.getMains();
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


  /**
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
    }*/

  public goBack(): void {
    this.location.back();
  }
}
