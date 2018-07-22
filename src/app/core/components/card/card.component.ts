import { Subscription } from 'rxjs/Subscription';
import { Card } from './../../models/icard.model';
import { CarouselService } from './../../services/carousel.service';
import { CardDataService } from './../../services/card-data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnDestroy {
  _selectedCard: Card;
  private _data = [];
  constructor(private _cardDataService: CardDataService,
    private _carouselService: CarouselService) {
  }
  ngOnDestroy() {
  }
  ngOnInit() {
    this._cardDataService.getAllCards()
      .then((res) => {
        this._data = res;
        this._selectedCard = this._data[0]; // default selection
      });

    this._cardDataService.searchCriteria$.subscribe( items => {
      if ( items && items.length !== 0) {
        this._selectedCard = items[0];
        this._data = items;
      } else {
        this._cardDataService.getAllCards()
        .then((res) => {
          this._data = res;
          this._selectedCard = this._data[0]; // default selection
      });
      }
    });

    this._carouselService.selectionChange$.subscribe(
      (selectedIndex) => {
        this._selectedCard = this._data[selectedIndex];
      });
  }

  cardTheme() {
    return {'background-color' : this._selectedCard.theme.color};
  }

  hedareDeviderTheme() {
    return {'background-color' : this._selectedCard.header.color}
  }


}
