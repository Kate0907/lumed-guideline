import { Component} from '@angular/core';
import { GuidelineItemService } from '../main.service';
import { GuidelineGroupBase } from './lumed-guideline-group-base';
import { SessionCheckService } from '../session-check.service';

@Component({
  selector: 'lumed-guideline-group',
  templateUrl: './lumed-guideline-group.component.html',
  styleUrls: ['./lumed-guideline-group.component.css']
})

export class GuidelineGroupComponent extends GuidelineGroupBase {

  constructor(
    protected itemService: GuidelineItemService,
    protected sessionService: SessionCheckService,
  ) {
    super(itemService, sessionService);
  }
}
