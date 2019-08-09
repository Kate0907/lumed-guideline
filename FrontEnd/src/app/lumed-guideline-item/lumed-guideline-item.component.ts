import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { GuidelineItemService } from '../main.service';

@Component({
  selector: 'lumed-guideline-item',
  templateUrl: './lumed-guideline-item.component.html',
  styleUrls: ['./lumed-guideline-item.component.css']
})
export class GuidelineItemComponent implements OnInit {

  public get isAdmin(): boolean {
    if (sessionStorage.getItem('loggedIn') === 'true') {
      return true;
    }
    return false;
  }

  constructor(
    protected itemService: GuidelineItemService,
    protected location: Location) { }

  public ngOnInit(): void { }

  public goBack(): void {
    this.location.back();
  }
  public async saveToJson(): Promise<void> {
    await this.itemService.saveToJson();
  }
}
