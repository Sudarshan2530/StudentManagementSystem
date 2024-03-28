import { Component } from '@angular/core';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrl: './read.component.css'
})
export class ReadComponent {

  name: string="";
  data:any
   setUpdate(data:any)
   {
    this.name=data.name;
   }
   setDelete(data:any)
   {
    this.name=data.name;
   }
}
