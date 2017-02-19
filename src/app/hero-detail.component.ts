import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute, Params, Router } from '@angular/router'
import { Location } from '@angular/common'

import { Hero } from './hero'
import { HeroService } from './hero.service'

import 'rxjs/add/operator/switchMap';

@Component({
    moduleId: module.id,
    selector: 'my-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit{

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location,
        private router: Router
    ){}

    @Input() hero: Hero;

    ngOnInit(): void{
        this.route.params.
        switchMap((params: Params) => this.heroService.getHero(+params['id']))
        .subscribe(m => this.hero = m);
    }

    goBack(): void {
        this.location.back();
    }

    editHero(): void {
        this.router.navigate(['/edit', this.hero.id]);
    }

    // for testing
    get diagnostic() { return JSON.stringify(this.hero); }
}
