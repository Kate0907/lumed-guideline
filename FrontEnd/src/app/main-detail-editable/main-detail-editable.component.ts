import { Component, OnInit, Input } from '@angular/core';
import { MainSection } from '../main';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { MainService } from '../main.service';
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

  public async refresh(): Promise<void> {
    await this.getMains();
    await this.getMain();
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

  public async addItem(parentId: number, type: ItemType): Promise<void> {
    await this.mainService.addItem(parentId, type);
    await this.refresh();
  }

  public async updateItem(item: Item): Promise<void> {
    await this.mainService.updateItem(item);
    await this.refresh();
  }

  public async deleteMessage(mainId: number): Promise<void> {
    await this.mainService.deleteMessage(mainId);
    await this.refresh();
  }

  public async deleteLink(mainId: number): Promise<void> {
    await this.mainService.deleteMain(mainId);
    await this.refresh();
  }

  public async deleteSection(sectionId: number): Promise<void> {
    await this.mainService.deleteSection(sectionId);
    await this.refresh();
  }

    public async itemUp(sectionId: number, messageIndex: number): Promise<void> {
      const section = this.getMainById(sectionId);
      await this.mainService.itemUp(section, messageIndex);
      this.getMain();
    }

    public async itemDown(sectionId: number, messageIndex: number): Promise<void> {
      const section = this.getMainById(sectionId);
      await this.mainService.itemDown(section, messageIndex);
      this.getMain();
    }

  public goBack(): void {
    this.location.back();
  }
}

