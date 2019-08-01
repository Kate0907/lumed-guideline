import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { GuidelineItemService } from '../main.service';


@Component({
  selector: 'lumed-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {

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
