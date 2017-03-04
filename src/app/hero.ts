import { Power } from './power'

export class Hero {
  id: number;
  public name: string;
  power: string;
  alterEgo?: string;
  powers: string[];
  myPower: Power[];

  constructor(id: number, name: string, power: string, alterEgo?: string){
    this.id = id;
    this.name = name;
    this.power = power;
    this.alterEgo = alterEgo;
    this.myPower = [];

    this.powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
    this.powers.forEach(element => {    
      this.myPower.push(new Power(element, true));
    });

  }

}