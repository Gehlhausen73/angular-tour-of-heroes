import { Component, Input, OnInit } from '@angular/core';
import { Hero } from './hero'
import { HeroService } from './hero.service'




@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {

  // this tell angular to supply a HeroService from someplace
  constructor(private heroSerice: HeroService) {}

  
  selectedHero: Hero;
  heroes: Hero[];

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeros(): void {
    // when the promis resolves we THEN call the lamda (with input m) to process the results
    this.heroSerice.getHeroesSlowly().then(m => this.heroes = m);
  }

  ngOnInit(): void{
    // when angular is ready it will call this OnInit method
    // which we use to fill in our list of heros
    this.getHeros();
  }
}



