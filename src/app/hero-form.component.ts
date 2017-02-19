import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute, Params, Router } from '@angular/router'

import { Hero } from './hero'
import { HeroService } from './hero.service'

import 'rxjs/add/operator/switchMap';

@Component({
    moduleId: module.id,
    selector: 'hero-form',
    templateUrl: './hero-form.component.html'
})
export class HeroFormComponent implements OnInit{
    powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

    constructor(
            private heroService: HeroService,
            private route: ActivatedRoute
        ) { 
            //this.model = new Hero(18, 'Dr. IQ', this.powers[0], 'Chuck Overstreet');
        }

    //model = new Hero(18, 'Dr. IQ', this.powers[0], 'Chuck Overstreet');
    @Input() model: Hero;
    //model: Hero;
    submitted = false;

    


    onSubmit() { this.submitted = true; }
    newHero() { this.model = new Hero(42, '', ''); }

    ngOnInit(): void {
        console.log('here in ngOnInit in hero-form');
        //console.log(this.route.params.switchMap);
        //this.model = new Hero(18, 'Dr. IQ', this.powers[0], 'Chuck Overstreet');
        //this.heroService.getHero(12).then(m => this.model = m);
        
        //
        // why does model have to be an initialized hero before this works?
        this.route.params.
            switchMap((params: Params) => this.heroService.getHero(+params['id']))
            .subscribe(m => this.model = m);
    }

    // for testing
    get diagnostic() { return JSON.stringify(this.model); }
}