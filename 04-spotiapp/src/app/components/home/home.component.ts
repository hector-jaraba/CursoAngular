import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  albums: any[] = []
  loading: boolean;
  error:boolean;
  mensajeError: string; 

  constructor(private http: HttpClient, private spotify:SpotifyService ) {

    this.loading = true;
    this.error = false;
    // this.http.get('https://restcountries.eu/rest/v2/lang/es')
    //       .subscribe((resp:any) => {
    //         this.paises = resp;
    //         console.log(resp);
    //       });

    this.spotify.getNewReleases()
        .subscribe((data:any) =>{
          this.albums = data;
          this.loading = false;
        },(errorServicio)=> {
          this.error = true;
          this.loading = false;
          this.mensajeError = errorServicio.error.error.message;
        });
  }

  ngOnInit() {
  }

}
