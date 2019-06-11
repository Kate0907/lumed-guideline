import { Component, OnInit, Input } from '@angular/core';
import { Illness } from '../illness';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';

import { IllnessService } from '../illness.service';

@Component({
  selector: 'app-illness-detail',
  templateUrl: './illness-detail.component.html',
  styleUrls: ['./illness-detail.component.css']
})
export class IllnessDetailComponent implements OnInit {
  @Input() illness: Illness;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private illnessService: IllnessService,
    private location: Location
  ) {
this.router.events.subscribe(navigation => {
      console.log(navigation)
      if (navigation instanceof NavigationEnd && navigation.url.indexOf('detail') !== -1){
        /*
        const urls = navigation.url.split('/');
        console.log(urls)
        const id = Number(urls[urls.length-1]);
        */
        this.getIllness();
      }
       //this.getIllness(navigation.state.navigationId);
    });

  }

  ngOnInit(): void {
    //this.getIllness();

  }
  getIllness(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.illnessService.getIllness(id)
      .subscribe(illness => {
         this.illness = illness;
         console.log(id,illness)
        });
  }

  goBack(): void {
    this.location.back();
  }

}
