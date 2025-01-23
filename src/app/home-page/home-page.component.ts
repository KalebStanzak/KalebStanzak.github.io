import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
time = new Date().getFullYear() -2023
timeString : String = this.TimeFormat(this.time);

TimeFormat(i:number){
if(i==1){return("1st");}
if(i==2){return("2nd");}
if(i==3){return("3rd");}
return(i + "th");}
}
