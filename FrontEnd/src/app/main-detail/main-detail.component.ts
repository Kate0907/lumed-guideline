import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { GuidelineItemService } from '../main.service';
import { Item } from '../item';

@Component({
  selector: 'app-main-detail',
  templateUrl: './main-detail.component.html',
  styleUrls: ['./main-detail.component.css']
})
export class GuidelineItemComponent implements OnInit {
  @Input() public main: Item;
  @Input() public mains: Item[];
  isAdmin = true;
  url: string[];
  ID: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mainService: GuidelineItemService,
    private location: Location
  ) {
    this.router.events.subscribe(navigation => {
      if (navigation instanceof NavigationEnd && navigation.url.indexOf('detail') !== -1) {
        this.getMain();
        const urls = navigation.url.split('/');
        const id = Number(urls[urls.length - 1]);
        this.url = urls;
        this.ID = id;
      }
    });
  }

  public async ngOnInit() {
    await this.getMains();
   }

  public async getMain(): Promise<void> {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.main = await this.mainService.getOneItem(id);
  }

  public async getMains(): Promise<void> {
    this.mains = await this.mainService.getAllItems();
  }

  public getMainById(id: number): Item {
    return this.mains.find(main => main.id === id);
  }

  public goBack(): void {
    this.location.back();
  }
}
