import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent{

  movies:any[] = [];
  movieName:string = "";

  constructor(private pelis:PeliculasService, private route: ActivatedRoute, private router:Router) {

    this.route.params.subscribe(params => {
      this.movieName = params['movieName'];
      this.searchMovie(this.movieName);
    })

  }

  searchMovie(movieName:string)
  {
    this.pelis.searchMovie(movieName).subscribe(results => this.movies = results);
  }

  showFilm(id: number){
    this.router.navigate(['/film',id]);

  }

  ngOnInit() {
  }

}
