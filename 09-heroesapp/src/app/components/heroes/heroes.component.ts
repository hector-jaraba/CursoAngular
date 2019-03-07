import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes:any[] = [];
  loading:boolean = true;

  constructor(private _heroesService:HeroesService) { 
    this._heroesService.getHeroes()
    .subscribe(data=>{
      console.log(data);

      this.heroes = data;
      this.loading = false;

      // for (let key$ in data) {
      //   console.log(data[key$]);
      //   this.heroes.push(data[key$]);
      // }
    });
  }

  borrarHeroe (key$:string){
    this._heroesService.borrarHeroe(key$).subscribe(respuesta => {
      if(respuesta){
        console.log(respuesta);
      }else{
        delete this.heroes[key$];
      }
    });
  }

  ngOnInit() {
  }

}
