import { Component } from '@angular/core';
import { SessionCheckService } from '../session-check.service';

@Component({
  selector: 'lumed-guideline-item',
  templateUrl: './lumed-guideline-item.component.html',
  styleUrls: ['./lumed-guideline-item.component.css']
})
export class GuidelineItemComponent {

  public get isAdmin(): boolean {
    return this.sessionService.checkSession();
  }

  constructor(
    protected sessionService: SessionCheckService,
  ) { }

 
}
