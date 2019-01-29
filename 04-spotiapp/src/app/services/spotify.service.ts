import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service listo');
  }

  getQuery( query: string )
  {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCVJbLqzXUm3Pb_OU-C8A3ke9ZA93p8O8pDtNNl1XJ22PDeR7mnrqWfbEUkbtCIenK0AKqSRydaXtd17XQ'
    })

    return this.http.get(url, {headers});
  }

  getNewReleases(){

   return this.getQuery('browse/new-releases')
              .pipe(map(data => data['albums'].items));
  }

  getArtista(termino: string)
  {
   return this.getQuery(`search?q=${ termino }&type=artist`)
              .pipe(map(data => data['artists'].items)); 
  }
}

