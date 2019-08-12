import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { GuidelineItemService } from '../main.service';
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
    protected itemService: GuidelineItemService,
    protected sessionService: SessionCheckService,
    protected location: Location) { }

  public goBack(): void {
    this.location.back();
  }
  public async saveToJson(): Promise<void> {
    await this.itemService.saveToJson();
  }
}
