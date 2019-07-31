import { Component } from '@angular/core';
import { GuidelineItemService } from '../main.service';


@Component({
  selector: 'lumed-guideline-group',
  templateUrl: './lumed-guideline-group.component.html',
  styleUrls: ['./lumed-guideline-group.component.css']
})

export class GuidelineGroupComponent {

  public isAdmin = false;

  constructor(
    protected itemService: GuidelineItemService,
  ) { }

  public async saveToJson(): Promise<void> {
    await this.itemService.saveToJson();
  }


}
