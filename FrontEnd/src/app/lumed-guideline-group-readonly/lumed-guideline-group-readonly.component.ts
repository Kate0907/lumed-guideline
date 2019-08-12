import { Component } from '@angular/core';
import { GuidelineItemService } from '../main.service';
import { GuidelineGroupBase } from '../lumed-guideline-group/lumed-guideline-group-base';
import { SessionCheckService } from '../session-check.service';

@Component({
  selector: 'lumed-guideline-group-readonly',
  templateUrl: './lumed-guideline-group-readonly.component.html',
  styleUrls: ['./lumed-guideline-group-readonly.component.css']
})
export class GuidelineGroupReadonlyComponent extends GuidelineGroupBase {

  constructor(
    protected itemService: GuidelineItemService,
    protected sessionService: SessionCheckService,
  ) {
    super(itemService, sessionService);
  }
}
