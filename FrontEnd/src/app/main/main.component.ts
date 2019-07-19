import { Component, OnInit, Input } from '@angular/core';
import { GuidelineItemService } from '../main.service';
import { Item } from '../item';
import { ItemType } from '../ItemType';

@Component({
  selector: 'lumed-guideline-group',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class GuidelineGroupComponent implements OnInit {
  @Input() public items: Item[];
  @Input() public itemGroup: Item[];
  public isAdmin = false;
  public readonly itemType = ItemType;

  constructor(private itemService: GuidelineItemService) { }

  public  ngOnInit() {
      this.refresh();
  }

  public async refresh(): Promise<void>  {
    this.items = await this.itemService.getAllItems();
    this.itemGroup = this.items.filter(main => main.type === this.itemType.Group);
  }
}
