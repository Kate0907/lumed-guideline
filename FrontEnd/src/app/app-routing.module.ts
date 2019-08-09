import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuidelineGroupComponent } from './lumed-guideline-group/lumed-guideline-group.component';
import { GuidelineItemComponent } from './lumed-guideline-item/lumed-guideline-item.component';
import { LumedGuidelineQuestionComponent } from './lumed-guideline-question/lumed-guideline-question.component';
import { LumedGuidelineResultComponent } from './lumed-guideline-result/lumed-guideline-result.component';
import { LumedGuidelineLoginComponent } from './lumed-guideline-login/lumed-guideline-login.component';

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
    component: LumedGuidelineQuestionComponent,
    data: {
      breadcrumb: 'Question'
    }
  },
  {
    path: 'result/:id',
    component: LumedGuidelineResultComponent,
    data: {
      breadcrumb: 'Result'
    }
  },
  {
    path: 'login',
    component: LumedGuidelineLoginComponent,
    data: {
      breadcrumb: 'Login'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }