import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { GuidelineItemService } from '../main.service';
import { Item } from '../item';
import { ItemType } from '../ItemType';
import { GuidelineItemBase } from '../lumed-guideline-item/lumed-guideline-item-base';
import { SessionCheckService } from '../session-check.service';


@Component({
  selector: 'lumed-guideline-item-editable',
  templateUrl: './lumed-guideline-item-editable.component.html',
  styleUrls: ['./lumed-guideline-item-editable.component.css']
})
export class ItemEditableComponent extends GuidelineItemBase  {

  constructor(
    protected route: ActivatedRoute,
    protected router: Router,
    protected itemService: GuidelineItemService,
    protected sessionService: SessionCheckService,
    protected location: Location) {
    super(route, router, itemService, sessionService, location);
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
}
