import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute, Router, } from '@angular/router';
import { Location } from '@angular/common';
import { GuidelineItemService } from '../main.service';
import { GuidelineItemBase } from '../lumed-guideline-item/lumed-guideline-item-base';
import { Item } from '../item';
import { ItemType } from '../ItemType';
import { QuestionComponent } from '../question/question.component';

@Component({
  selector: 'lumed-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent extends GuidelineItemBase implements OnInit {
  @Input() public items: Item[];
  @Input() public result: Item;
  @Input() public results: Item[];

  public readonly itemType = ItemType;

  constructor(
    protected route: ActivatedRoute,
    protected router: Router,
    protected itemService: GuidelineItemService,
    protected location: Location) {
    super(route, router, itemService, location);
  }

  public async ngOnInit(): Promise<void> {
    await this.getResult();
    console.log(this.item.id);
    console.log(this.items.length);
  }


  public async getResult(): Promise<void> {
    this.items = await this.itemService.getAllItems();
    this.results = this.items.filter(item => item.type = ItemType.Result);
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.item = await this.itemService.getOneItem(id);
  }
}
