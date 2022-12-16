import { Component, OnInit } from '@angular/core';

import { PokemonsService } from './../../services/pokemons.service';

import { Pokemon } from './../../models/Pokemon';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css'],
})
export class PokeListComponent implements OnInit {
  pokeList: Pokemon[] = [];

  constructor(private pokemonsService: PokemonsService) {}

  ngOnInit(): void {
    this.pokeList = this.pokemonsService.getList();
  }

}
