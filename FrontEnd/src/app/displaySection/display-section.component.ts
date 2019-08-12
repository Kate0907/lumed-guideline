import { Component,  Input } from '@angular/core';
import { ActivatedRoute, Router, } from '@angular/router';
import { GuidelineItemService } from '../main.service';
import { GuidelineItemBase } from '../lumed-guideline-item/lumed-guideline-item-base';
import { SessionCheckService } from '../session-check.service';


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
    protected sessionService: SessionCheckService,
    ) {
    super(route, router, itemService, sessionService, );
  }
  public changeShow() {
    if (this.show === true) {
      this.show = false;
    } else {
      this.show = true;
    }
  }
}
