import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Heroe } from '../interfaces/heroes.interface';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroesURL:string = "https://heroesapp-f77e2.firebaseio.com/heroes.json";
  heroeURL:string = "https://heroesapp-f77e2.firebaseio.com/heroes/";

  constructor(private http: HttpClient) { }

  nuevoHeroe( heroe:Heroe ){
    let body = JSON.stringify(heroe);
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    });

     return this.http.post(this.heroesURL, body, {headers});
    //  .pipe(map(res => {
    //   console.log(res.nombre);
    //   return res.json
    //  }));


     }

     actualizarHeroe( heroe:Heroe, key$:string ){
      let body = JSON.stringify(heroe);
      let headers = new HttpHeaders({
        'Content-Type':'application/json'
      });

      let url = `${this.heroeURL}/${key$}.json`
  
       return this.http.put(url, body, {headers});
      //  .pipe(map(res => {
      //   console.log(res.nombre);
      //   return res.json
      //  }));
  
  
       }

       getHeroe(key$:string){
         let url = `${this.heroeURL}/${key$}.json`
         return this.http.get(url);

       }

       getHeroes(){
        return this.http.get(this.heroesURL);

      }

      borrarHeroe(key$:string){
        let url = `${this.heroeURL}/${key$}.json`;
        return this.http.delete(url);

      }
  

     

  }

