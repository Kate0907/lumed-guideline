import { Component, OnInit, Input } from '@angular/core';
import { MainSection } from '../main';
import { MainGroup } from '../mainGroup';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { MainService } from '../main.service';

@Component({
  selector: 'app-main-readonly',
  templateUrl: './main-readonly.component.html',
  styleUrls: ['./main-readonly.component.css']
})
export class MainReadonlyComponent implements OnInit {
  @Input() public mains: MainSection[];
  @Input() public maingroup: MainGroup[];

  constructor(
    private mainService: MainService,
  ) { }

  ngOnInit() {
    this.getMains();
    this.getMainGroup();
  }

  public getMainGroup(): void {
    this.mainService.getMainGroup().subscribe(mainGroup => this.maingroup = mainGroup);
  }

  public getMains(): void {
    this.mainService.getMains().subscribe(mains => this.mains = mains);
  }

}
