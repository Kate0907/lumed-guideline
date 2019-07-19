import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { GuidelineItemService } from '../main.service';
import { Item } from '../item';
import { ItemType } from '../ItemType';



@Component({
  selector: 'app-main-detail-readonly',
  templateUrl: './main-detail-readonly.component.html',
  styleUrls: ['./main-detail-readonly.component.css']
})
export class MainDetailReadonlyComponent implements OnInit {
  @Input() public main: Item;
  @Input() public mains: Item[];

  public readonly itemType = ItemType;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mainService: GuidelineItemService,
    private location: Location) {
    this.router.events.subscribe(navigation => {
      if (navigation instanceof NavigationEnd && navigation.url.indexOf('detail') !== -1) {
        this.getMain();
      }
    });
  }

  public ngOnInit(): void {
    this.getMains();
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

  goBack(): void {
    this.location.back();
  }
}

