export class Pokemon {
  name: string;
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
  types: string[];

  constructor(
    name: string,
    types: string[] = ["Normal"],
    hp: number = 42,
    attack: number = 49,
    defense: number = 49,
    specialAttack: number = 65,
    specialDefense: number = 65,
    speed: number = 45
  ) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.specialAttack = specialAttack;
    this.specialDefense = specialDefense;
    this.speed = speed;
    this.types = types;
  }
}
