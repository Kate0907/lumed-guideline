import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { GuidelineItemService } from '../main.service';
import { Item } from '../item';

@Component({
  selector: 'lumed-guideline-item',
  templateUrl: './lumed-guideline-item.component.html',
  styleUrls: ['./lumed-guideline-item.component.css']
})
export class GuidelineItemComponent implements OnInit {
  @Input() public item: Item;
  @Input() public items: Item[];
  public isAdmin = true;
  public url: string[];
  public ID: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itemService: GuidelineItemService,
    private location: Location
  ) {
    this.router.events.subscribe(navigation => {
      if (navigation instanceof NavigationEnd && navigation.url.indexOf('detail') !== -1) {
        this.getItem();
        const urls = navigation.url.split('/');
        const id = Number(urls[urls.length - 1]);
        this.url = urls;
        this.ID = id;
      }
    });
  }

  public async ngOnInit() {
    await this.getItems();
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

  public goBack(): void {
    this.location.back();
  }
}
