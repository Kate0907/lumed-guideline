import { Component, OnInit, Input } from '@angular/core';
import { GuidelineItemService } from '../main.service';
import { Item } from '../item';
import { ItemType } from '../ItemType';

@Component({
  selector: 'app-lumed-guideline-group-readonly',
  templateUrl: './main-readonly.component.html',
  styleUrls: ['./main-readonly.component.css']
})
export class GuidelineGroupReadonlyComponent implements OnInit {
  @Input() public mains: Item[];
  @Input() public maingroup: Item[];

  public readonly itemType = ItemType;

  constructor(
    private mainService: GuidelineItemService,
  ) { }

  public async ngOnInit(): Promise<void> {
    await this.getMains();
    this.getMainGroup();
  }

  public  getMainGroup(): void  {
    this.maingroup = this.mains.filter(main => main.type === this.itemType.Group);
  }


  public async getMains(): Promise<void> {
    this.mains = await this.mainService.getAllItems();
  }

  public getMainById(id: number): Item {
    return this.mains.find(main => main.id === id);
  }
}
