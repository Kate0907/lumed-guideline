import { Component, OnInit, Input } from '@angular/core';
import { MainService } from '../main.service';
import { Item } from '../item';
import { ItemType } from '../ItemType';

@Component({
  selector: 'app-main-readonly',
  templateUrl: './main-readonly.component.html',
  styleUrls: ['./main-readonly.component.css']
})
export class MainReadonlyComponent implements OnInit {
  @Input() public mains: Item[];
  @Input() public maingroup: Item[];

  public readonly itemType = ItemType;

  constructor(
    private mainService: MainService,
  ) { }

  public async ngOnInit(): Promise<void> {
    await this.getMains();
    this.getMainGroup();
  }

  public  getMainGroup(): void  {
    this.maingroup = this.mains.filter(main => main.type === this.itemType.Group);
  }


  public async getMains(): Promise<void> {
    this.mains = await this.mainService.getMains();
  }

  public getMainById(id: number): Item {
    return this.mains.find(main => main.id === id);
  }
}
