import { Component, OnInit, Input } from '@angular/core';
import { MainService } from '../main.service';
import { MainGroup } from '../mainGroup';
import { Item } from '../item';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  @Input() public mains: Item[];
  @Input() public maingroup: MainGroup[];
  public isAdmin = false;

  constructor(private mainService: MainService) { }

  public ngOnInit() {
    this.getMains();
    this.getMainGroup();
  }

  public async getMainGroup(): Promise<void> {
    this.maingroup = await this.mainService.getMainGroup();
  }

  public async getMains(): Promise<void> {
    this.mains = await this.mainService.getMains();
  }
}
