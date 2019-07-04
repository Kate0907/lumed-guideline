import { Component, OnInit, Input } from '@angular/core';
import { MainSection } from '../main';
import { MainGroup } from '../mainGroup';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { MainService } from '../main.service';

@Component({
  selector: 'app-main-editable',
  templateUrl: './main-editable.component.html',
  styleUrls: ['./main-editable.component.css']
})
export class MainEditableComponent implements OnInit {
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

  public updateGroupName(maingroup: MainGroup, newname: string) {
    this.mainService.updateGroupName(maingroup, newname);

  }

  public addMain(maingroup: MainGroup) {
    this.mainService.addMain(maingroup);
  }

  public addMainGroup(maingroup: MainGroup[]){
    this.mainService.addMainGroup(maingroup);
  }

  public deleteMain(main: MainSection, sameIndex: number, eachgroup: MainGroup) {
    this.mainService.deleteMain(main, sameIndex, eachgroup);
  }

/**   public updateGroupName(groupIndex: number, newname: string) {
    this.mainService.updateGroupName(groupIndex, newname);

  }*/

}
