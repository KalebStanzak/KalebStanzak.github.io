import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ResumeComponent } from './resume/resume.component';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'angular-kalebstanzak-github';
  pageStyle: string = "default";
  changeStyle(){
    if(this.pageStyle == "default"){
      this.pageStyle = "dark"
      return;
    }
    this.pageStyle="default"
  }
}
