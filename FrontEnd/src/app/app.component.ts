import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, Navigation } from '@angular/router';
import { Location } from '@angular/common';
import { GuidelineItemService } from './main.service';
import { environment } from './../environments/environment';
import { SessionCheckService } from './session-check.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'abc';
  public url;

  public get isAdmin(): boolean {
    return this.sessionService.checkSession();
  }

  constructor(
    protected route: ActivatedRoute,
    protected router: Router,
    protected itemService: GuidelineItemService,
    protected sessionService: SessionCheckService,
    protected location: Location) {
    this.router.events.subscribe(navigation => {
      if (navigation instanceof NavigationEnd) {
        this.url = navigation.url;
      }
    });
  }

  public signOut(): void {
    sessionStorage.clear();
  }

  public async saveToJson(): Promise<void> {
    await this.itemService.saveToJson();
  }

  public goBack(): void {
    this.location.back();
  }
}
