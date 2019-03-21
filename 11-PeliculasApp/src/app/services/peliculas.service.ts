import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  apikey: string = 'api_key=04dd161a308e63905cc59952d1eb4b6e';
  baseURL: string = 'https://api.themoviedb.org/3' 

  
  constructor(private http:HttpClient) {

  }

  getTopFilms(){
    let topFilmsURL:string = `${this.baseURL}/movie/top_rated?${this.apikey}`; 
    
    return this.http.get(topFilmsURL)
    .pipe(
      map((val) => val['results'])
    );
  }

  getTrending(time:string){
    let topTrendingURL:string = `${this.baseURL}/trending/movie/${time}?${this.apikey}`; 
    
    return this.http.get(topTrendingURL)
    .pipe(
      map((val) => val['results'])
    );
  }

  getMovie(id:number){
    let movieURL:string = `${this.baseURL}/movie/${id}?${this.apikey}`; 
    
    return this.http.get(movieURL);
  }

  searchMovie(movieName:string)
  {
    let searchURL:string = `${this.baseURL}/search/movie?${this.apikey}&query=${movieName}`; 
    
    return this.http.get(searchURL)
    .pipe(
      map((val) => val['results'])
    );

  }
}
