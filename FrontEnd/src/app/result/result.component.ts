import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute, Router, } from '@angular/router';
import { Location } from '@angular/common';
import { GuidelineItemService } from '../main.service';
import { GuidelineItemBase } from '../lumed-guideline-item/lumed-guideline-item-base';
import { Item } from '../item';
import { ItemType } from '../ItemType';

@Component({
  selector: 'lumed-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent extends GuidelineItemBase implements OnInit {
  @Input() public items: Item[];
  @Input() public results: Item[];

  public readonly itemType = ItemType;

  constructor(
    protected route: ActivatedRoute,
    protected router: Router,
    protected itemService: GuidelineItemService,
    protected location: Location) {
    super(route, router, itemService, location);
  }

  public ngOnInit(): void {
    this.refresh();
    this.getResult();
  }

  public async getResult(): Promise<void> {
    this.items = await this.itemService.getAllItems();
    this.results = this.items.filter(item => item.type === this.itemType.Result);
  }
}
