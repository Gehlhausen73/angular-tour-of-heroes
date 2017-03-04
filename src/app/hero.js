"use strict";
var power_1 = require('./power');
var Hero = (function () {
    function Hero(id, name, power, alterEgo) {
        var _this = this;
        this.id = id;
        this.name = name;
        this.power = power;
        this.alterEgo = alterEgo;
        this.myPower = [];
        this.powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
        this.powers.forEach(function (element) {
            _this.myPower.push(new power_1.Power(element, true));
        });
    }
    return Hero;
}());
exports.Hero = Hero;
//# sourceMappingURL=hero.js.map