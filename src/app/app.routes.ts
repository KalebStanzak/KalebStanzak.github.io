import { Routes } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProjComponent } from './proj/proj.component';
import { ClassesComponent } from './classes/classes.component';

export const routes: Routes = [
    {path: '', redirectTo: 'about', pathMatch: 'full'},
    {path: 'about', component: HomePageComponent},
    {path: 'resume', component: ResumeComponent},
    {path: 'projects', component: ProjComponent},
    {path: 'classes', component: ClassesComponent },
    {path: '**', redirectTo: '/about'}
];
