import { Component, OnInit, Input } from '@angular/core';
import { MainSection } from '../main';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { MainService } from '../main.service';

@Component({
  selector: 'app-main-detail',
  templateUrl: './main-detail.component.html',
  styleUrls: ['./main-detail.component.css']
})
export class MainDetailComponent implements OnInit {
  @Input() public main: MainSection;
  isAdmin = true;
  url: string[];
  ID: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mainService: MainService,
    private location: Location
  ) {
    this.router.events.subscribe(navigation => {
      if (navigation instanceof NavigationEnd && navigation.url.indexOf('detail') !== -1) {
        this.getMain();
        const urls = navigation.url.split('/');
        const id = Number(urls[urls.length - 1]);
        this.url = urls;
        this.ID = id;
      }
    });
  }

  public ngOnInit(): void { }

  public async getMain(): Promise<void> {
    const id = +this.route.snapshot.paramMap.get('id');
    this.main = await this.mainService.getMain(id);
  }

  public goBack(): void {
    this.location.back();
  }
}
