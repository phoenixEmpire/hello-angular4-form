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

const routes: Routes = [
  { path: 'user-input', component: UserInputComponent },
  { path: 'template-driven', component: HeroFormComponent },
  { path: 'model-driven', component: PersonListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UserInputComponent,
    HeroFormComponent,
    PersonListComponent,
    PersonDetailComponent
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
