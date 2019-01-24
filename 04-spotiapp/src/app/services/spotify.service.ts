import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service listo');
  }

  getNewReleases(){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDNIheXovK68EmH83YSJ1oOQboz8a9E45uW3c7lsqVDMXos6QaMw3tPb-hqueK9cnKLJOrWJJ0mdAyeEuU'
    })

   return this.http.get('	https://api.spotify.com/v1/browse/new-releases',{headers});
  }
}

