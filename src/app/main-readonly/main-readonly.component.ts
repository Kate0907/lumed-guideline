import { Component, OnInit, Input } from '@angular/core';
import { MainSection } from '../main';
import { MainGroup } from '../mainGroup';
import { MainService } from '../main.service';
import { Item } from '../item';

@Component({
  selector: 'app-main-readonly',
  templateUrl: './main-readonly.component.html',
  styleUrls: ['./main-readonly.component.css']
})
export class MainReadonlyComponent implements OnInit {
  @Input() public mains: Item[];
  @Input() public maingroup: MainGroup[];

  constructor(
    private mainService: MainService,
  ) { }

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

  public getMainById(id: number): Item {
    return this.mains.find(main => main.id === id);
  }
}
