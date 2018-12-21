import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'appresults',
  templateUrl: './results.component.html',
  styles: []
})
export class ResultsComponent implements OnInit {
  heroes:Heroe[];
  termino:string;
  constructor(private _heroesService:HeroesService, private activatedRouter:ActivatedRoute) {    
  }

  ngOnInit() {

    this.activatedRouter.params.subscribe(params =>{
      this.termino = params['termino'];
      this.heroes = this._heroesService.burcarHeroes(this.termino);
    });
  }




}
