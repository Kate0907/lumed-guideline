import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { GuidelineItemService } from '../main.service';

@Component({
  selector: 'lumed-guideline-question',
  templateUrl: './lumed-guideline-question.component.html',
  styleUrls: ['./lumed-guideline-question.component.css']
})
export class LumedGuidelineQuestionComponent {

  public isAdmin = false;

  constructor(
    protected itemService: GuidelineItemService,
    protected location: Location) { }

  public goBack(): void {
    this.location.back();
  }
  public async saveToJson(): Promise<void> {
    await this.itemService.saveToJson();
  }
}
