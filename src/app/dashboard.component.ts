import { Component, OnInit }  from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];

    constructor(private heroService: HeroService){}
    
    ngOnInit(): void {
        this.heroService.getHeroes().then(m => this.heroes = m.slice(1,5));
    }
}