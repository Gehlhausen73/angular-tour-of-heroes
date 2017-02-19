export class Hero {
  id: number;
  public name: string;
  power: string;
  alterEgo?: string;
  powers: string[];

  constructor(id: number, name: string, power: string, alterEgo?: string){
    this.id = id;
    this.name = name;
    this.power = power;
    this.alterEgo = alterEgo;

    this.powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  }

}