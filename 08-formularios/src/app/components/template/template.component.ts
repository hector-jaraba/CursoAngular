import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form) {
      border: 1px solid red;
    }
  `]
})
export class TemplateComponent implements OnInit {

  usuario:Object = {
    apellido: 'Jaraba',
    nombre: 'Héctor',
    pais: 'ESP'
  }

  paises = [{
    codigo: "CRI",
    nombre: "Costa Rica"
  },{
    codigo: "ESP",
    nombre: "España"
  },];

  constructor() { }

  ngOnInit() {
  }

  guardar(forma:NgForm){
    console.log("Formulario posteado.");
    console.log(forma);
    console.log(forma.value);
    console.log("Usuario", this.usuario)

  }

}
