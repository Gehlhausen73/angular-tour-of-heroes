import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { Hero } from './hero'
import { HeroService } from './hero.service'




@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];

  // this tell angular to supply a HeroService from someplace
  constructor(
    private heroSerice: HeroService,
    private router: Router) {}

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    // when the promis resolves we THEN call the lamda (with input m) to process the results
    this.heroSerice.getHeroesSlowly().then(m => this.heroes = m);
  }

  ngOnInit(): void{
    // when angular is ready it will call this OnInit method
    // which we use to fill in our list of heros
    this.getHeroes();
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

}



