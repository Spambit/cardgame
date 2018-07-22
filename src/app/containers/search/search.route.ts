import { CardsSearchComponent } from './cards-search/cards-search.component';
import { Component } from '@angular/core';
import { SearchComponent } from './search.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';

export const routing: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'search',
    children: [
      { path: '', redirectTo: 'cards', pathMatch: 'full' },
      { path: 'cards', component: CardsSearchComponent },
    ]
  }
]);
