import { Component, OnInit, Input } from '@angular/core';
import { MainService } from '../main.service';
import { Item } from '../item';
import { ItemType } from '../ItemType';

@Component({
  selector: 'app-main-editable',
  templateUrl: './main-editable.component.html',
  styleUrls: ['./main-editable.component.css']
})
export class MainEditableComponent implements OnInit {
  @Input() public mains: Item[];
  @Input() public maingroup: Item[];

  public readonly itemType = ItemType;

  constructor(
    private mainService: MainService,
  ) { }

  public async ngOnInit() {
    await this.getMains();
    this.getMainGroup();
  }

  public getMain(id: number): Item {
    return this.mains.find(main => main.id === id);
  }

  public  getMainGroup(): void  {
    this.maingroup = this.mains.filter(main => main.type === this.itemType.Group);
  }

  public async getMains(): Promise<void> {
    this.mains = await this.mainService.getMains();
  }

  public async updateItem(maingroup: Item): Promise<void> {
    await this.mainService.updateItem(maingroup);
  }

  public async addMain(groupId: number, type: ItemType): Promise<void> {
    await this.mainService.addItem(groupId, type);
    await this.getMains();
    this.getMainGroup();
  }

  public async addMainGroup(type: ItemType): Promise<void> {
    await this.mainService.addItemNoParent(type);
    await this.getMains();
    this.getMainGroup();
  }

  public async deleteMain(mainId: number) {
    await this.mainService.deleteItem(mainId);
    await this.getMains();
    this.getMainGroup();
  }
}
