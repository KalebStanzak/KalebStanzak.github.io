import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ResumeComponent } from './resume/resume.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})

export class RoutingModule { }
