import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';

import { PokeListComponent } from './poke-list/poke-list.component';
import { PokeItemComponent } from './poke-list/poke-item/poke-item.component';

@NgModule({
  declarations: [
    PokeListComponent,
    PokeItemComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class PagesModule { }
