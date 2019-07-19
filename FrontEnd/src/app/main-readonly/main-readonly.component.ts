import { Component, OnInit, Input } from '@angular/core';
import { GuidelineItemService } from '../main.service';
import { Item } from '../item';
import { ItemType } from '../ItemType';

@Component({
  selector: 'lumed-guideline-group-readonly',
  templateUrl: './main-readonly.component.html',
  styleUrls: ['./main-readonly.component.css']
})
export class GuidelineGroupReadonlyComponent implements OnInit {
  @Input() public items: Item[];
  @Input() public itemGroup: Item[];

  public readonly itemType = ItemType;

  constructor(
    private itemService: GuidelineItemService,
  ) { }

  public async ngOnInit(): Promise<void> {
    await this.refresh();
  }

  public async refresh(): Promise<void> {
    this.items = await this.itemService.getAllItems();
    this.itemGroup = this.items.filter(main => main.type === this.itemType.Group);
  }

  public getItemById(id: number): Item {
    return this.items.find(main => main.id === id);
  }
}