import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router, NavigationEnd, Navigation } from '@angular/router';
import { Location } from '@angular/common';
import { GuidelineItemService } from './main.service';
import { environment } from './../environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'abc';

  public get isAdmin(): boolean {
    if (sessionStorage.getItem('loggedIn') === 'true') {
      return true;
    }
    return false;
  }

  public url;

  constructor(
    protected route: ActivatedRoute,
    protected router: Router,
    protected itemService: GuidelineItemService,
    protected location: Location) {

    console.log(environment.production);

    this.router.events.subscribe(navigation => {
      console.log(navigation);
      if (navigation instanceof NavigationEnd) {
        this.url = navigation.url;
        console.log(this.url);
      }
    });
  }

  public ngOnInit(): void {

  }

  public signOut(): void {
    sessionStorage.clear();
    // if (sessionStorage.getItem('loggedIn') === 'true') {
    //   this.isAdmin = true;
    // } else { this.isAdmin = false; }

    // this.router.navigate(['/detail/1']);
    console.log(this.isAdmin);
    console.log(this.url);
  }

  public async saveToJson(): Promise<void> {
    await this.itemService.saveToJson();
  }

  public goBack(): void {
    this.location.back();
  }
}
