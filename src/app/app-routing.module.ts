import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MainDetailComponent } from './main-detail/main-detail.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    data: {
      breadcrumb: 'MainMainMain illness'
    }
  },
  {
    path: 'detail/:id',
    component: MainDetailComponent,
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