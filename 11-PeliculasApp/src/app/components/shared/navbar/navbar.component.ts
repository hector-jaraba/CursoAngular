import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../../services/peliculas.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(private route:Router) {

    
  }

  searchMovie(movieName:string)
  {
    if(movieName.length<3) return;
    
    this.route.navigate(['/search', movieName]);
  }

  ngOnInit() {

  }

}
