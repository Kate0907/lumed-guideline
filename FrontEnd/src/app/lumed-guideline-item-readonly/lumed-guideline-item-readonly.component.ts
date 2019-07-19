import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { GuidelineItemService } from '../main.service';
import { Item } from '../item';
import { ItemType } from '../ItemType';



@Component({
  selector: 'lumed-guideline-item-readonly',
  templateUrl: 'lumed-guideline-item-readonly.component.html',
  styleUrls: ['./lumed-guideline-item-readonly.component.css']
})
export class ItemReadonlyComponent extends GuidelineItemBase implements OnInit {
  @Input() public item: Item;
  @Input() public items: Item[];

  public readonly itemType = ItemType;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itemService: GuidelineItemService,
    private location: Location) {
      super();
    this.router.events.subscribe(navigation => {
      if (navigation instanceof NavigationEnd && navigation.url.indexOf('detail') !== -1) {
        this.getItem();
      }
    });
  }

  public ngOnInit(): void {
    this.getItems();
  }

  public async getItem(): Promise<void> {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.item = await this.itemService.getOneItem(id);
  }

  public async getItems(): Promise<void> {
    this.items = await this.itemService.getAllItems();
  }

  public getItemById(id: number): Item {
    return this.items.find(main => main.id === id);
  }

  goBack(): void {
    this.location.back();
  }
}

