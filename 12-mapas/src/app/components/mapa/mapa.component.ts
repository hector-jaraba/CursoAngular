import { Component, OnInit } from '@angular/core';
import {Marcador} from '../../classes/marcador.class'
import {MatSnackBar} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { MapaEditarComponent } from './mapa-editar.component';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  marcadores: Marcador[] = [];

  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor(public snackBar:MatSnackBar, public dialog: MatDialog) 
  { 
    var marcadoresJSON = localStorage.getItem('marcadores');
    if(marcadoresJSON!=null){
      this.marcadores = JSON.parse(marcadoresJSON);
    }

    //const nuevoMarcador = new Marcador(51.678418,7.809007);
    //this.marcadores.push(nuevoMarcador);
  }

  ngOnInit() {
  }

  agregarMarcador(evento)
  {
    const coords:{lat:number, lng:number} = evento.coords;
    const nuevoMarcador = new Marcador(coords.lat, coords.lng);
    this.marcadores.push(nuevoMarcador);
    this.guardarStorage();
    this.snackBar.open('Marcador creado', 'cerrar',{duration:2000});
  }

  guardarStorage() {
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));

  }

  borrarMarcador(i:number){
    this.marcadores.splice(i,1);
    this.guardarStorage();
    this.snackBar.open('Marcador borrado', 'cerrar', {duration:2000});
  }

  editarMarcador(marcador:Marcador){

    const dialogRef = this.dialog.open(MapaEditarComponent, {
      width: '250px',
      data: {titulo: marcador.titulo, desc: marcador.desc}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);

      if(!result) return;
      
      marcador.titulo = result.titulo;
      marcador.desc = result.desc;
      this.guardarStorage();
      this.snackBar.open("Marcador actualizado","cerrar", {duration: 2000})


    });
     
  }

}
