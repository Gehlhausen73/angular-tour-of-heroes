"use strict";
var Hero = (function () {
    // id: number;
    // name: string;
    // power: string;
    // alterEgo?: string;
    function Hero(id, name, power, alterEgo) {
        this.id = id;
        this.name = name;
        this.power = power;
        this.alterEgo = alterEgo;
    }
    return Hero;
}());
exports.Hero = Hero;
//# sourceMappingURL=hero.js.map