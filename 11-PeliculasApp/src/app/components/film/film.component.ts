import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';



@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styles: []
})
export class FilmComponent implements OnInit {

  idFilm:number = 0;
  movie:any = {};

  constructor( private route: ActivatedRoute, private pelis: PeliculasService ) {

    this.route.params.subscribe(params => this.idFilm = params['id']);

    pelis.getMovie(this.idFilm).subscribe(movie =>{
      this.movie = movie
      console.log(movie);
    } );

    

    


  }

  ngOnInit() {
  }

}
