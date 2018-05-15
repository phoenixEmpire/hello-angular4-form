import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { UserInputComponent } from './user-input/user-input.component';
import { HeroFormComponent } from './template-driven/hero-form.component';

const routes: Routes = [
  { path: 'user-input', component: UserInputComponent },
  { path: 'template-driven', component: HeroFormComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UserInputComponent,
    HeroFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
