import { Component } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'lumed-guideline-item',
  templateUrl: './lumed-guideline-item.component.html',
  styleUrls: ['./lumed-guideline-item.component.css']
})
export class GuidelineItemComponent {

  public isAdmin = false;

  constructor(
    protected location: Location) { }

  public goBack(): void {
    this.location.back();
  }



}
