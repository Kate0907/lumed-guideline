import { Component, OnInit, Input } from '@angular/core';
import { GuidelineItemService } from '../main.service';
import { Item } from '../item';
import { ItemType } from '../ItemType';

@Component({
  selector: 'app-guideline-group',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class GuidelineGroupComponent implements OnInit {
  @Input() public mains: Item[];
  @Input() public maingroup: Item[];
  isAdmin = false;
  public readonly itemType = ItemType;

  constructor(private mainService: GuidelineItemService) { }

  public  ngOnInit() {
      this.refresh();
  }

  public async refresh(): Promise<void>  {
    this.mains = await this.mainService.getAllItems();
    this.maingroup = this.mains.filter(main => main.type === this.itemType.Group);
  }
}
