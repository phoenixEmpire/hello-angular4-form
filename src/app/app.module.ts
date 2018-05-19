import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { UserInputComponent } from './user-input/user-input.component';
import { HeroFormComponent } from './template-driven/hero-form.component';
import { PersonListComponent } from './model-driven/person-list/person-list.component';
import { PersonDetailComponent } from './model-driven/person-detail/person-detail.component';
import { PersonService } from './model-driven/person.service';
import { HeroFormTemplateComponent } from './form-validate/template-driven/hero-form-template.component';
import { ForbiddenNameValidatorDirective } from './form-validate/forbidden-name.directive';
import { HeroFormModelComponent } from './form-validate/model-driven/hero-form-model.component';
import { DynamicFormComponent } from './dynamic-form/form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form/form/dynamic-form-question.component';

const routes: Routes = [
  { path: 'user-input', component: UserInputComponent },
  { path: 'template-driven', component: HeroFormComponent },
  { path: 'model-driven', component: PersonListComponent },
  { path: 'form-validate/template-driven', component: HeroFormTemplateComponent },
  { path: 'form-validate/model-driven', component: HeroFormModelComponent },
  { path: 'dynamic-form', component: DynamicFormComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UserInputComponent,
    HeroFormComponent,
    PersonListComponent,
    PersonDetailComponent,
    HeroFormTemplateComponent,
    HeroFormModelComponent,
    ForbiddenNameValidatorDirective,
    DynamicFormComponent,
    DynamicFormQuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
