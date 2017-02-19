"use strict";
var Hero = (function () {
    function Hero(id, name, power, alterEgo) {
        this.id = id;
        this.name = name;
        this.power = power;
        this.alterEgo = alterEgo;
        this.powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
    }
    return Hero;
}());
exports.Hero = Hero;
//# sourceMappingURL=hero.js.map