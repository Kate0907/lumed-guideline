import { Component, OnInit, Input } from '@angular/core';
import { GuidelineItemService } from '../main.service';
import { Item } from '../item';
import { ItemType } from '../ItemType';

@Component({
  selector: 'lumed-guideline-group-editable',
  templateUrl: './main-editable.component.html',
  styleUrls: ['./main-editable.component.css']
})
export class GuidelineGroupEditableComponent implements OnInit {
  @Input() public items: Item[];
  @Input() public itemGroup: Item[];

  public readonly itemType = ItemType;

  constructor(
    private itemService: GuidelineItemService,
  ) { }

  public async ngOnInit(): Promise<void> {
    await this.refresh();
  }

  public getItemById(id: number): Item {
    return this.items.find(main => main.id === id);
  }

  public async refresh(): Promise<void> {
    this.items = await this.itemService.getAllItems();
    this.itemGroup = this.items.filter(main => main.type === this.itemType.Group);
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

  public async deleteMain(mainId: number) {
    await this.itemService.deleteItem(mainId);
    await this.refresh();
  }
}
