import { Component, OnInit, Input } from '@angular/core';
import { MainSection } from '../main';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { MainService } from '../main.service';
import { LINK } from '../mock-link';
import { MAINS } from '../mock-mainsection';
import { SECTIONS } from '../mock-sections';


@Component({
  selector: 'app-main-detail',
  templateUrl: './main-detail.component.html',
  styleUrls: ['./main-detail.component.css']
})
export class MainDetailComponent implements OnInit {
  @Input() main: MainSection;
  isAdmin = true;
  lily = LINK;
  alisa = MAINS;
  kevin = SECTIONS;
  url: string[];
  ID: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mainService: MainService,
    private location: Location
  ) {
    console.log(this)
       this.router.events.subscribe(navigation => {
      console.log(navigation);
      if (navigation instanceof NavigationEnd && navigation.url.indexOf('detail') !== -1) {
        this.getMain();
        const urls = navigation.url.split('/');
        const id = Number(urls[urls.length - 1]);
        this.url = urls;
        this.ID = id;
  
      }
});

  }

  ngOnInit(): void {
    console.log(this);
    console.log('hello');
  }

  public getMain(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.mainService.getMain(id)
      .subscribe(main => {
         this.main = main;
         console.log(id, main);
        });
  }

  goBack(): void {
    this.location.back();
  }

}
