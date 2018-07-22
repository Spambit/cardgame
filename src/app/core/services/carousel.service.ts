import { Subscription } from 'rxjs/Subscription';
import { Card } from './../models/icard.model';
import { Observable } from 'rxjs/Observable';
import { CardDataService } from './card-data.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class CarouselItem {
  img: string;
  selected = false;
  constructor(imgUrl: string) {
    this.img = imgUrl;
  }
}

@Injectable()
export class CarouselService {
  private _carouselItems: CarouselItem[] = [];
  private _selectionChange$: Subject<number> = new Subject();
  carouselDataChange$: Subject<CarouselItem[]> = new Subject();
  constructor(private _cardDataService: CardDataService) {
    _cardDataService.searchCriteria$.subscribe(items => {
      this.getCarouselData();
    });
  }

  getCarouselData(): Promise<CarouselItem[]> {
    return new Promise((resolve, reject) => {
      this._carouselItems = [];
      const searchResults = this._cardDataService.searchedCards;
      if (!searchResults || searchResults.length === 0) {
        this._cardDataService.getAllCards().then((cards) => {
          cards.forEach(card => {
            this._carouselItems.push(new CarouselItem(card.body.image));
          });
          resolve([...this._carouselItems]);
          this.carouselDataChange$.next(this._carouselItems);
        });
      } else {
        searchResults.forEach(searchResult => {
          this._carouselItems.push(new CarouselItem(searchResult.body.image));
        });
        resolve([...this._carouselItems]);
        this.carouselDataChange$.next(this._carouselItems);
      }
    });
  }

  get selectionChange$() {
    return this._selectionChange$;
  }

  private resetSelection() {
    this._carouselItems.forEach(item => {
      item.selected = false;
    });
  }

  public setSelected(index: number): void {
    if (index < 0 || index >= this._carouselItems.length) {
      throw Error('IlligalArgumentException : Array index out of bounds.');
    }
    this.resetSelection();
    this._carouselItems[index].selected = true;
    this._selectionChange$.next(index);
  }

}
