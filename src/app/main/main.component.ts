import { Component, OnInit } from '@angular/core';
import { MainSection } from '../main';
import { MainService } from '../main.service';
import { MAINGROUP } from './mock-mainGroup';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  mains: MainSection[];
  maingroup = MAINGROUP;


  constructor(private mainService: MainService) { }

  ngOnInit() {
    console.log(this);
    this.getMains();
  }


  public getMains(): void {
    this.mainService.getMains().subscribe(elle => this.mains = elle);
  }

}
