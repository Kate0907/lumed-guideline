import { Component, OnInit, Input } from '@angular/core';
import { MainSection } from '../main';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { MainService } from '../main.service';



@Component({
  selector: 'app-main-detail-readonly',
  templateUrl: './main-detail-readonly.component.html',
  styleUrls: ['./main-detail-readonly.component.css']
})
export class MainDetailReadonlyComponent implements OnInit {
  @Input() public main: MainSection;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mainService: MainService,
    private location: Location) {
    console.log(this)
    this.router.events.subscribe(navigation => {
      console.log(navigation);
      if (navigation instanceof NavigationEnd && navigation.url.indexOf('detail') !== -1) {
        this.getMain();
      }
    });
  }

  public ngOnInit(): void {
  }
  public async getMain(): Promise<void> {
    const id = +this.route.snapshot.paramMap.get('id');
    this.main = await this.mainService.getMain(id);
    console.log(id, this.main);
  }

  goBack(): void {
    this.location.back();
  }
}

