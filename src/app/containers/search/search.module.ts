import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './../../core';
import { routing } from './search.route';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { CardsSearchComponent } from './cards-search/cards-search.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    routing,
    CoreModule,
    FormsModule
  ],
  declarations: [SearchComponent, CardsSearchComponent],
  exports : [SearchComponent, CardsSearchComponent]
})
export class SearchModule { }
