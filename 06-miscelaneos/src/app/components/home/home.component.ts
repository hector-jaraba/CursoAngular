import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `

  
  <button (click)="increment()">Increment size</button>
  <button (click)="decrement()">Decrement size</button>

  <button class="btn btn-info m-5" (click)="colorize()">Colorize</button>

  <hr>

  <app-ng-style></app-ng-style> 

 <app-css></app-css>

  <p>Hola mundo desde app.component</p>

  <app-clases></app-clases>

  <p [appResaltado]="'orange'" >Hola mundo</p>

  <app-ng-switch></app-ng-switch>


    <p>
      home works!
    </p>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
