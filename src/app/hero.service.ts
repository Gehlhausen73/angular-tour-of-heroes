import { Injectable } from '@angular/core'
import { Hero } from './hero'
import { HEROES } from './mock-heroes'


@Injectable()
export class HeroService{
    // I promise to return an array of heros
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
            // Simulate server latency with 200 millisecond delay
            setTimeout(() => resolve(HEROES), 200);
        });
    }

    getHero(id: number): Promise<Hero> {
        return this.getHeroes().then(m => m.find(n => n.id === id));
    }
}