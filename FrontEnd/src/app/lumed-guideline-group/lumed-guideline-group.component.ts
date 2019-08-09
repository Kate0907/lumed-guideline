import { Component, OnInit } from '@angular/core';
import { GuidelineItemService } from '../main.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'lumed-guideline-group',
  templateUrl: './lumed-guideline-group.component.html',
  styleUrls: ['./lumed-guideline-group.component.css']
})

export class GuidelineGroupComponent implements OnInit {

  public get isAdmin(): boolean {
    if (sessionStorage.getItem('loggedIn') === 'true') {
      return true;
    }
    return false;
  }

  constructor(
    protected itemService: GuidelineItemService,
  ) { }

  public ngOnInit(): void {

  }

  public async saveToJson(): Promise<void> {
    await this.itemService.saveToJson();
  }


}
