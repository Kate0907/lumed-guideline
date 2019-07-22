import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { GuidelineItemService } from '../main.service';
import { Item } from '../item';
import { ItemType } from '../ItemType';
import { GuidelineItemBase } from '../lumed-guideline-item/lumed-guideline-item-base';



@Component({
  selector: 'lumed-guideline-item-readonly',
  templateUrl: 'lumed-guideline-item-readonly.component.html',
  styleUrls: ['./lumed-guideline-item-readonly.component.css']
})
export class ItemReadonlyComponent extends GuidelineItemBase {

  constructor(
    protected route: ActivatedRoute,
    protected router: Router,
    protected itemService: GuidelineItemService,
    protected location: Location) {
      super(route, router, itemService, location);
  }


  // public ngOnInit(): void {
  //  this.getItems();
  // }

  /** public async getItem(): Promise<void> {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.item = await this.itemService.getOneItem(id);
  }

  public async getItems(): Promise<void> {
    this.items = await this.itemService.getAllItems();
  }

  public getItemById(id: number): Item {
    return this.items.find(main => main.id === id);
  }*/


}

