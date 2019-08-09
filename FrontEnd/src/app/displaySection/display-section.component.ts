import { Component,  Input } from '@angular/core';
import { ActivatedRoute, Router, } from '@angular/router';
import { Location } from '@angular/common';
import { GuidelineItemService } from '../main.service';
import { GuidelineItemBase } from '../lumed-guideline-item/lumed-guideline-item-base';


@Component({
  selector: 'lumed-display-section',
  templateUrl: './display-section.component.html',
  styleUrls: ['./display-section.component.css']
})
export class DisplaySectionComponent extends GuidelineItemBase {
  @Input() Sid: number;

  constructor(
    protected route: ActivatedRoute,
    protected router: Router,
    protected itemService: GuidelineItemService,
    protected location: Location) {
    super(route, router, itemService, location);
  }
  public changeShow() {
    if (this.show === true) {
      this.show = false;
    } else {
      this.show = true;
    }
  }
}