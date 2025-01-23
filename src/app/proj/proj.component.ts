import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proj',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proj.component.html',
  styleUrl: './proj.component.css'
})


export class ProjComponent implements OnInit  {

  info:any;
  name?: string;
  message?: string;
  gitData : any;
  dataMap : Map<any, any> = new Map();
  description?:string;

  ngOnInit(){
    console.log("hello, this message comes from proj.component.ts!\nI spent a lot of time learning (mostly failing) when attempting to write this code.\nTurns out, learning how to code asyncronous programs can be a bit tricky.");
    this.load();
    
  }

  constructor(private http: HttpClient){}

  async load(){
    const req = this.http.get('links.json');
    req.subscribe( async data =>{
      this.info = data;
      for(var obj in this.info){
        this.name = (this.info[obj].name);
        this.description = (this.info[obj].description);
        let want = await this.getInsideData(this.info[obj].apiLink)
        let holderArray = [want, this.description, this.info[obj].projectLink]  
        this.dataMap.set(this.name, holderArray); 
        }
      });
    }
    
  async getInsideData(apiLink:string) {
    return new Promise(
    resolve=>
      this.http.get<any[]>(apiLink)
      .subscribe( data => {
        this.gitData = data;
        this.message= this.gitData[0]['commit']['message'];
        resolve(this.message)
      }));
  }
  pleaseDontSort(a: any, b: any){
    return 0;
  }
}


