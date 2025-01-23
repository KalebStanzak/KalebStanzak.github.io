import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-classes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.css'
})
export class ClassesComponent implements OnInit{
  className?:string;
  classMap : Map<any, any> = new Map()

  ngOnInit(){
    this.load();
  }
  
  constructor(private http:HttpClient){}

  load(){
    this.http.get<any[]>('classes.json')
     .subscribe(data=>{
      for(var obj in data){
        this.classMap.set(data[obj].name, data[obj].description);
      }});
  }
  pleaseDontSort(a: any,b: any){
    return 1;   
  }
}
