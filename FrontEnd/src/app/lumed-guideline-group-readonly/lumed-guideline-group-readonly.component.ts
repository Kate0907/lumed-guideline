import { Component } from '@angular/core';
import { GuidelineItemService } from '../main.service';
import { GuidelineGroupBase } from '../lumed-guideline-group/lumed-guideline-group-base';

@Component({
  selector: 'lumed-guideline-group-readonly',
  templateUrl: './lumed-guideline-group-readonly.component.html',
  styleUrls: ['./lumed-guideline-group-readonly.component.css']
})
export class GuidelineGroupReadonlyComponent extends GuidelineGroupBase {

  constructor(
    protected itemService: GuidelineItemService,
  ) {
    super(itemService);
  }
}
