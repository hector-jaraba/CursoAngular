import { Component, OnInit } from '@angular/core';

import { PeliculasService } from '../../services/peliculas.service';

import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  topFilms:any[] = [];
  topTrendingFilms:any[] = [];
  trendingTime:string = 'day';

  constructor(private pelis: PeliculasService, private router:Router) {
    pelis.getTopFilms().subscribe(topFilms => {
      this.topFilms = topFilms;
      console.log(topFilms);
    });

    this.getTrending(this.trendingTime);

    
   }

   getTrending(time:string){
     this.trendingTime = time;
     this.pelis.getTrending(this.trendingTime).subscribe(topTrending => {
      this.topTrendingFilms = topTrending;
      console.log(topTrending);
    });

   }

   showFilm(id: number){
     this.router.navigate(['/film',id]);

   }

  ngOnInit() {
  }

}
