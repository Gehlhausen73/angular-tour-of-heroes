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
var router_1 = require('@angular/router');
var hero_1 = require('./hero');
var hero_service_1 = require('./hero.service');
require('rxjs/add/operator/switchMap');
var HeroFormComponent = (function () {
    function HeroFormComponent(heroService, route) {
        this.heroService = heroService;
        this.route = route;
        this.powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
        //model: Hero;
        this.submitted = false;
        //this.model = new Hero(18, 'Dr. IQ', this.powers[0], 'Chuck Overstreet');
    }
    HeroFormComponent.prototype.onSubmit = function () { this.submitted = true; };
    HeroFormComponent.prototype.newHero = function () { this.model = new hero_1.Hero(42, '', ''); };
    HeroFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('here in ngOnInit in hero-form');
        //console.log(this.route.params.switchMap);
        //this.model = new Hero(18, 'Dr. IQ', this.powers[0], 'Chuck Overstreet');
        //this.heroService.getHero(12).then(m => this.model = m);
        this.newHero();
        //
        // why does model have to be an initialized hero before this works?
        this.route.params.
            switchMap(function (params) { return _this.heroService.getHero(+params['id']); })
            .subscribe(function (m) { return _this.model = m; });
    };
    Object.defineProperty(HeroFormComponent.prototype, "diagnostic", {
        // for testing
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', hero_1.Hero)
    ], HeroFormComponent.prototype, "model", void 0);
    HeroFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'hero-form',
            templateUrl: './hero-form.component.html'
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.ActivatedRoute])
    ], HeroFormComponent);
    return HeroFormComponent;
}());
exports.HeroFormComponent = HeroFormComponent;
//# sourceMappingURL=hero-form.component.js.map