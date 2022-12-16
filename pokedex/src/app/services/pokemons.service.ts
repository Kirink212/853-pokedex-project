import { Injectable } from '@angular/core';

import { Pokemon } from '../models/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  pokeList: Pokemon[] = [
    new Pokemon("Bulbasaur", ["Grass", "Poison"]),
    new Pokemon("Ivysaur", ["Grass", "Poison"]),
    new Pokemon("Venusaur", ["Grass", "Poison"]),
    new Pokemon("Charmander", ["Fire"]),
    new Pokemon("Charmeleon", ["Fire"]),
    new Pokemon("Charizard", ["Fire"]),
  ];

  constructor() {

  }

  getList(): Pokemon[] {
    return this.pokeList;
  }


}
