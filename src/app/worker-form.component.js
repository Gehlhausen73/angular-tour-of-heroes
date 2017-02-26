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
var worker_1 = require('./worker');
var WorkerFormComponent = (function () {
    function WorkerFormComponent(route) {
        this.route = route;
        this.submitted = false;
    }
    WorkerFormComponent.prototype.onSubmit = function () { this.submitted = true; };
    WorkerFormComponent.prototype.newHero = function () { this.model = new worker_1.Worker(); };
    WorkerFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newHero();
        console.log(this.route.params);
        this.route.params.switchMap(function (params) { return _this.model.id = params['id']; });
        console.log('Worker ID is %i', this.model.id);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', worker_1.Worker)
    ], WorkerFormComponent.prototype, "model", void 0);
    WorkerFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'worker-form',
            templateUrl: './worker-form.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], WorkerFormComponent);
    return WorkerFormComponent;
}());
exports.WorkerFormComponent = WorkerFormComponent;
//# sourceMappingURL=worker-form.component.js.map