import { Component, OnInit, Input } from '@angular/core';
import { MainSection } from '../main';
import { MainService } from '../main.service';
import { MainGroup } from '../mainGroup';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  @Input() public mains: MainSection[];
  @Input() public maingroup: MainGroup[];
  isAdmin = true;

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
