import { Card } from './../models/icard.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class CardDataService {
  private _id = Math.random();
  private _data;
  private _searchedCards: Card[];
  private _searchCriteria$: Subject<Card[]> = new Subject();
  constructor(private _http: Http) {
    this.fetchCardData();
  }

  public get searchedCards() {
    return this._searchedCards;
  }

  private fetchCardData(): Promise<Card[]> {
    return new Promise((resolve, reject) => {
      const transformedArray: Card[] = [];
      const observable$ = this._http.get('assets/card_data.json')
      .map((response: Response) => {
          const rawArray = response.json();
          rawArray.forEach(element => {
            transformedArray.push(Card.create(element));
          });
      });
      observable$.subscribe({
        next : data => {
          this._data = data;
          resolve(transformedArray);
        }
      });
    });
  }

  public getAllCards() {
    return this.fetchCardData();
  }

  public get searchCriteria$() {
    return this._searchCriteria$;
  }

  public filter(criteria: string) {
    this.fetchCardData().then(
      cards => {
        this._searchedCards = cards.filter(card => card.footer.number.toString() === criteria);
        this._searchCriteria$.next(this._searchedCards);
      });
  }
}
