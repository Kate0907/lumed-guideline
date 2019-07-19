import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuidelineGroupComponent } from './main/main.component';
import { GuidelineItemComponent } from './main-detail/main-detail.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }