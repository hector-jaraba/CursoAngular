import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'miscelaneos';
  fontSize:number = 2; 
  color:string = 'black';
  colors:string [] = ['red','blue','green','purple','black'];

  increment(){
    this.fontSize++;
  }
  decrement(){
    this.fontSize--;
  }

  colorize(){
    let randN:number = Math.floor((Math.random() * 5) + 1);
    this.color = this.colors[randN];
  }
}
