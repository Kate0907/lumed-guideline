import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MainDetailComponent } from './main-detail/main-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { MainDetailReadonlyComponent } from './main-detail-readonly/main-detail-readonly.component';
import { MainDetailEditableComponent } from './main-detail-editable/main-detail-editable.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';



@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbComponent,
    MainComponent,
    MainDetailComponent,
    MainDetailReadonlyComponent,
    MainDetailEditableComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
