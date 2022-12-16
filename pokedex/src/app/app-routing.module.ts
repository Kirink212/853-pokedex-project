import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokeListComponent } from './pages/poke-list/poke-list.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: "", redirectTo: "list", pathMatch: "full"},
  { path: "list", component: PokeListComponent},
  { path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
