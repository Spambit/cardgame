import { Card } from './../../core/models/icard.model';
import { CardDataService } from './../../core/services/card-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private _brand = 'Hyland Card Game';
  _searchCriteria;
  private _searchedItems: Card[];
  _shouldShowSearchBar = false;
  constructor(private _cardDataService: CardDataService) {
  }

  get brand(): string {
    return this._brand;
  }

  toggleCollapsingNavbar($event) {
    this._shouldShowSearchBar = !this._shouldShowSearchBar;
  }

  ngOnInit() {
    this._cardDataService.searchCriteria$.subscribe( items => {
      if (!items || items.length === 0) {
        this._searchCriteria = 'No result';
      }
    });
  }

  search() {
    this._cardDataService.filter(this._searchCriteria);
  }
}
