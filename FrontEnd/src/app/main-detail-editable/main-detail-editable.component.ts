import { Component, OnInit, Input } from '@angular/core';
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
      if (navigation instanceof NavigationEnd && navigation.url.indexOf('detail') !== -1) {
        this.refresh();
      }
    });
  }

  public ngOnInit(): void {
    this.refresh();
  }

  public async refresh(): Promise<void> {
    this.mains = await this.mainService.getMains();
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.main = await this.mainService.getMain(id);
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

  public async deleteItem(itemId: number): Promise<void> {
    await this.mainService.deleteItem(itemId);
    await this.refresh();
  }

  public async itemUp(sectionId: number, messageIndex: number): Promise<void> {
    const section = this.getMainById(sectionId);
    await this.mainService.itemUp(section, messageIndex);
    await this.refresh();
  }

  public async itemDown(sectionId: number, messageIndex: number): Promise<void> {
    const section = this.getMainById(sectionId);
    await this.mainService.itemDown(section, messageIndex);
    await this.refresh();
  }

  public goBack(): void {
    this.location.back();
  }
}

