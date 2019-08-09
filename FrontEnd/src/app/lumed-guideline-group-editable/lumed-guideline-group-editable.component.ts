import { Component } from '@angular/core';
import { GuidelineItemService } from '../main.service';
import { Item } from '../item';
import { ItemType } from '../ItemType';
import { GuidelineGroupBase } from '../lumed-guideline-group/lumed-guideline-group-base';

@Component({
  selector: 'lumed-guideline-group-editable',
  templateUrl: './lumed-guideline-group-editable.component.html',
  styleUrls: ['./lumed-guideline-group-editable.component.css']
})
export class GuidelineGroupEditableComponent extends GuidelineGroupBase {

  constructor(
    protected itemService: GuidelineItemService,
  ) {
    super(itemService);
  }

  public async updateItem(maingroup: Item): Promise<void> {
    await this.itemService.updateItem(maingroup);
  }

  public async addMain(groupId: number, type: ItemType): Promise<void> {
    await this.itemService.addItem(groupId, type);
    await this.refresh();
  }

  public async addMainGroup(type: ItemType): Promise<void> {
    await this.itemService.addItemNoParent(type);
    await this.refresh();
  }

  public async deleteMain(mainId: number): Promise<void> {
    await this.itemService.deleteItem(mainId);
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

  public async saveToJson(): Promise<void> {
    await this.itemService.saveToJson();
  }
}
