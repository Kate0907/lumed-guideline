import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, } from '@angular/router';
import { Location } from '@angular/common';
import { GuidelineItemService } from '../main.service';
import { GuidelineItemBase } from '../lumed-guideline-item/lumed-guideline-item-base';
import { ItemType } from '../ItemType';
import { Item } from '../item';
import { SessionCheckService } from '../session-check.service';

@Component({
  selector: 'lumed-guideline-question-editable',
  templateUrl: './lumed-guideline-question-editable.component.html',
  styleUrls: ['./lumed-guideline-question-editable.component.css']
})
export class LumedGuidelineQuestionEditableComponent extends GuidelineItemBase implements OnInit {

  public result: Item;
  public checkedId: number[];
  public readonly itemType = ItemType;
  public checkedItemList: Item;
  public checkedItemIds: number[];
  public newResultId: number;

  constructor(
    protected route: ActivatedRoute,
    protected router: Router,
    protected itemService: GuidelineItemService,
    protected sessionService: SessionCheckService,
    protected location: Location) {
    super(route, router, itemService, sessionService, location);
  }

  public ngOnInit(): void {
    this.refresh();
  }

  public async saveResult(): Promise<void> {
    if (this.checkedItemIds == null) {
      this.checkedItemIds = [];
    }
    const questionnaire = this.getItemById(this.item.id);
    for (const id of questionnaire.childrenIds) {
      for (const checkboxId of this.getItemById(id).childrenIds) {
        if (this.getItemById(checkboxId).isChecked === true) {
          // if (this.checkedItemIds == null) {
          //   this.checkedItemIds = [checkboxId];
          // } else {
          this.checkedItemIds.push(checkboxId);
        }
      }
    }
    this.checkedItemList = await this.itemService.addItemNoParent(ItemType.Result);
    this.newResultId = this.checkedItemList.id;
    this.checkedItemList.childrenIds = this.checkedItemIds;
    this.checkedItemList.name = this.item.name + ' Result';
    await this.itemService.updateItem(this.checkedItemList);

    const resultUrl = '/result/' + this.newResultId;
    this.router.navigate([resultUrl]);
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
    const item = this.getItemById(sectionId);
    await this.itemService.itemUp(item, messageIndex);
    await this.refresh();
  }

  public async itemDown(sectionId: number, messageIndex: number): Promise<void> {
    const item = this.getItemById(sectionId);
    await this.itemService.itemDown(item, messageIndex);
    await this.refresh();
  }
}
