"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var hero_service_1 = require('./hero.service');
var HeroesComponent = (function () {
    // this tell angular to supply a HeroService from someplace
    function HeroesComponent(heroSerice) {
        this.heroSerice = heroSerice;
    }
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroesComponent.prototype.getHeros = function () {
        var _this = this;
        // when the promis resolves we THEN call the lamda (with input m) to process the results
        this.heroSerice.getHeroesSlowly().then(function (m) { return _this.heroes = m; });
    };
    HeroesComponent.prototype.ngOnInit = function () {
        // when angular is ready it will call this OnInit method
        // which we use to fill in our list of heros
        this.getHeros();
    };
    HeroesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-heroes',
            templateUrl: './heroes.component.html',
            styleUrls: ['./heroes.component.css'],
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService])
    ], HeroesComponent);
    return HeroesComponent;
}());
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map