import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuidelineGroupComponent } from './lumed-guideline-group/lumed-guideline-group.component';
import { GuidelineItemComponent } from './lumed-guideline-item/lumed-guideline-item.component';
import { QuestionComponent } from './question/question.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  {
    path: 'main',
    component: GuidelineGroupComponent,
    data: {
      breadcrumb: 'MainMainMain illness'
    }
  },
  {
    path: 'detail/:id',
    component: GuidelineItemComponent,
    data: {
      breadcrumb: 'Detail'
    }
  },
  {
    path: 'question/:id',
    component: QuestionComponent,
    data: {
      breadcrumb: 'Detail'
    }
  },
  {
    path: 'result/:id',
    component: ResultComponent,
    data: {
      breadcrumb: 'Detail'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }