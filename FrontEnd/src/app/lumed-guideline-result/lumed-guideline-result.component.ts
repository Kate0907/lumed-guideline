import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, } from '@angular/router';
import { GuidelineItemService } from '../main.service';
import { GuidelineItemBase } from '../lumed-guideline-item/lumed-guideline-item-base';
import { Item } from '../item';
import { ItemType } from '../ItemType';
import { SessionCheckService } from '../session-check.service';

@Component({
  selector: 'lumed-guideline-result',
  templateUrl: './lumed-guideline-result.component.html',
  styleUrls: ['./lumed-guideline-result.component.css']
})
export class LumedGuidelineResultComponent extends GuidelineItemBase implements OnInit {
  @Input() public results: Item[];

  public readonly itemType = ItemType;

  constructor(
    protected route: ActivatedRoute,
    protected router: Router,
    protected itemService: GuidelineItemService,
    protected sessionService: SessionCheckService,
    ) {
    super(route, router, itemService, sessionService);
  }

  public async ngOnInit(): Promise<void> {
    await this.getResult();
  }

  public async getResult(): Promise<void> {
    this.items = await this.itemService.getAllItems();
    this.results = this.items.filter(item => item.type = ItemType.Result);
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.item = await this.itemService.getOneItem(id);
  }
}
