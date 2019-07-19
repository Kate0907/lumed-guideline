import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { GuidelineItemService } from '../main.service';
import { Item } from '../item';
import { ItemType } from '../ItemType';
import { GuidelineItemBase } from '../lumed-guideline-item/lumed-guideline-item-base';


@Component({
  selector: 'lumed-guideline-item-editable',
  templateUrl: './lumed-guideline-item-editable.component.html',
  styleUrls: ['./lumed-guideline-item-editable.component.css']
})
export class ItemEditableComponent extends GuidelineItemBase implements OnInit {
  @Input() public item: Item;
  @Input() public items: Item[];

  public readonly itemType = ItemType;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itemService: GuidelineItemService,
    private location: Location) {
      super();
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
    this.items = await this.itemService.getAllItems();
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.item = await this.itemService.getOneItem(id);
  }

  public getItemById(id: number): Item {
    return this.items.find(main => main.id === id);
  }

  public async addItem(parentId: number, type: ItemType): Promise<void> {
    await this.itemService.addItem(parentId, type);
    await this.refresh();
  }

  public async updateItem(item: Item): Promise<void> {
    await this.itemService.updateItem(item);
    await this.refresh();
  }

  public async deleteItem(itemId: number): Promise<void> {
    await this.itemService.deleteItem(itemId);
    await this.refresh();
  }

  public async itemUp(sectionId: number, messageIndex: number): Promise<void> {
    const section = this.getItemById(sectionId);
    await this.itemService.itemUp(section, messageIndex);
    await this.refresh();
  }

  public async itemDown(sectionId: number, messageIndex: number): Promise<void> {
    const section = this.getItemById(sectionId);
    await this.itemService.itemDown(section, messageIndex);
    await this.refresh();
  }

  public goBack(): void {
    this.location.back();
  }
}