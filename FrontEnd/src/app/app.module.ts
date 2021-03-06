import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GuidelineGroupComponent } from './lumed-guideline-group/lumed-guideline-group.component';
import { GuidelineItemComponent } from './lumed-guideline-item/lumed-guideline-item.component';
import { AppRoutingModule } from './app-routing.module';
import { ItemReadonlyComponent } from './lumed-guideline-item-readonly/lumed-guideline-item-readonly.component';
import { ItemEditableComponent } from './lumed-guideline-item-editable/lumed-guideline-item-editable.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { HttpClientModule } from '@angular/common/http';
import { GuidelineGroupEditableComponent } from './lumed-guideline-group-editable/lumed-guideline-group-editable.component';
import { GuidelineGroupReadonlyComponent } from './lumed-guideline-group-readonly/lumed-guideline-group-readonly.component';
import { DisplaySectionComponent } from './displaySection/display-section.component';
import { LumedGuidelineQuestionComponent } from './lumed-guideline-question/lumed-guideline-question.component';
import { LumedGuidelineResultComponent } from './lumed-guideline-result/lumed-guideline-result.component';
import { LumedGuidelineQuestionReadonlyComponent } from './lumed-guideline-question-readonly/lumed-guideline-question-readonly.component';
import { LumedGuidelineQuestionEditableComponent } from './lumed-guideline-question-editable/lumed-guideline-question-editable.component';
import { LumedGuidelineLoginComponent }
from './lumed-guideline-login/lumed-guideline-login.component';



@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbComponent,
    GuidelineGroupComponent,
    GuidelineItemComponent,
    ItemReadonlyComponent,
    ItemEditableComponent,
    GuidelineGroupEditableComponent,
    GuidelineGroupReadonlyComponent,
    DisplaySectionComponent,
    LumedGuidelineQuestionComponent,
    LumedGuidelineResultComponent,
    LumedGuidelineQuestionReadonlyComponent,
    LumedGuidelineQuestionEditableComponent,
    LumedGuidelineLoginComponent
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
