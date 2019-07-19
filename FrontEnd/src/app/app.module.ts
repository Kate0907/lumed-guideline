import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GuidelineGroupComponent } from './main/main.component';
import { GuidelineItemComponent } from './main-detail/main-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { MainDetailReadonlyComponent } from './main-detail-readonly/main-detail-readonly.component';
import { MainDetailEditableComponent } from './main-detail-editable/main-detail-editable.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { HttpClientModule } from '@angular/common/http';
import { GuidelineGroupEditableComponent } from './main-editable/main-editable.component';
import { GuidelineGroupReadonlyComponent } from './main-readonly/main-readonly.component';



@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbComponent,
    GuidelineGroupComponent,
    GuidelineItemComponent,
    MainDetailReadonlyComponent,
    MainDetailEditableComponent,
    GuidelineGroupEditableComponent,
    GuidelineGroupReadonlyComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
