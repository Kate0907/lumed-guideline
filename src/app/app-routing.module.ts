import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IllnessComponent } from './illness/illness.component';
import { IllnessDetailComponent } from './illness-detail/illness-detail.component';
import { TreatmentComponent } from './treatment/treatment.component';

const routes: Routes = [
  { path: '', redirectTo: '/illness', pathMatch: 'full' },
  { path: 'illness', component: IllnessComponent },
  { path: 'detail/:id', component: IllnessDetailComponent },
  { path: 'treatment/:id', component: TreatmentComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}