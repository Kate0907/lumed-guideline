import { Component, OnInit, Input } from '@angular/core';
import { MainService } from '../main.service';
import { Item } from '../item';
import { ItemType } from '../ItemType';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  @Input() public mains: Item[];
  @Input() public maingroup: Item[];
  isAdmin = false;
  public readonly itemType = ItemType;

  constructor(private mainService: MainService) { }

  public ngOnInit() {
    this.getMains();
    this.getMainGroup();
  }

  public  getMainGroup(): void  {
    this.maingroup = this.mains.filter(main => main.type === this.itemType.Group);
  }

  public async getMains(): Promise<void> {
    this.mains = await this.mainService.getMains();
  }
}
