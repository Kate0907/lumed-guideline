import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router, } from '@angular/router';
import { Location } from '@angular/common';
import { GuidelineItemService } from '../main.service';
import { GuidelineItemBase } from '../lumed-guideline-item/lumed-guideline-item-base';
import { ItemType } from '../ItemType';
import { Item } from '../item';



@Component({
  selector: 'lumed-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent extends GuidelineItemBase {
  @Input() public items: Item[];
  public result: Item;
  public checkedId: number[];
  public readonly itemType = ItemType;

  constructor(
    protected route: ActivatedRoute,
    protected router: Router,
    protected itemService: GuidelineItemService,
    protected location: Location) {
    super(route, router, itemService, location);
  }

  public async saveResult(id: number): Promise<void> {
    this.result = this.items.find(item => item.name === this.getItemById(id).name && item.type === ItemType.Result);
    this.checkedId = this.getItemById(id).childrenIds.filter(ID => this.getItemById(ID).isChecked === true);
    this.result.childrenIds = this.checkedId;
    await this.itemService.updateItem(this.result);
  }



}
