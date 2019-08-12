import { Component } from '@angular/core';
import { SessionCheckService } from '../session-check.service';

@Component({
  selector: 'lumed-guideline-question',
  templateUrl: './lumed-guideline-question.component.html',
  styleUrls: ['./lumed-guideline-question.component.css']
})
export class LumedGuidelineQuestionComponent {

  public get isAdmin(): boolean {
    return this.sessionService.checkSession();
  }

  constructor(
    protected sessionService: SessionCheckService,
    ) { }

}
