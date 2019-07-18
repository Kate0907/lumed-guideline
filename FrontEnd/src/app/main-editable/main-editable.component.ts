import { Component, OnInit, Input } from '@angular/core';
import { MainGroup } from '../mainGroup';
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
  @Input() public maingroup: MainGroup[];

  public readonly itemType = ItemType;

  constructor(
    private mainService: MainService,
  ) { }

  public ngOnInit() {
    this.getMains();
    this.getMainGroup();
  }

  public getMain(id: number): Item {
    return this.mains.find(main => main.id === id);
  }

  public async getMainGroup(): Promise<void>  {
    this.maingroup = await this.mainService.getMainGroup();
  }

  public async getMains(): Promise<void> {
    this.mains = await this.mainService.getMains();
  }

  public updateGroupName(maingroup: MainGroup, newname: string) {
    this.mainService.updateGroupName(maingroup, newname);
  }

  public async addMain(groupId: number, type: ItemType): Promise<void> {
    await this.mainService.addItem(groupId, type);
    await this.getMains();
    await this.getMainGroup();
  }

  public async addMainGroup(): Promise<void> {
    await this.mainService.addMainGroup();
    await this.getMainGroup();
  }

  public async deleteGroup(eachgroup: MainGroup): Promise<void> {
    await this.mainService.deleteGroup(eachgroup);
    await this.getMainGroup();
  }

  public async deleteMain(mainId: number) {
    await this.mainService.deleteItem(mainId);
    await this.getMainGroup();
  }
}
