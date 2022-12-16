import { Component, Input } from '@angular/core';

import { Pokemon } from './../../../models/Pokemon';

@Component({
  selector: 'app-poke-item',
  templateUrl: './poke-item.component.html',
  styleUrls: ['./poke-item.component.css']
})

export class PokeItemComponent {
  @Input() pokemon?: Pokemon;
}
