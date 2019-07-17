import { Component, OnInit, Input } from '@angular/core';
import { MainSection } from '../main';
import { MainGroup } from '../mainGroup';
import { MainService } from '../main.service';

@Component({
  selector: 'app-main-editable',
  templateUrl: './main-editable.component.html',
  styleUrls: ['./main-editable.component.css']
})
export class MainEditableComponent implements OnInit {
  @Input() public mains: MainSection[];
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

  public updateGroupName(maingroup: MainGroup, newname: string) {
    this.mainService.updateGroupName(maingroup, newname);

  }

  public async addMain(maingroup: MainGroup): Promise<void> {
    const newMain = await this.mainService.addMain(maingroup);
    console.log(newMain);
    this.getMains();
    this.getMainGroup();
  }

  public async addMainGroup(): Promise<void> {
    await this.mainService.addMainGroup();
    this.getMainGroup();

  }

  public async deleteGroup(eachgroup: MainGroup): Promise<void> {
    await this.mainService.deleteGroup(eachgroup);
    this.getMainGroup();
  }

  public async deleteMain(main: MainSection) {
    await this.mainService.deleteMain(main.id);
    this.getMainGroup();
  }
}
