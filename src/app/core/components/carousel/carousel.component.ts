import { Subscription } from 'rxjs/Subscription';
import { CarouselService, CarouselItem } from './../../services/carousel.service';
import { Component, OnInit, OnDestroy } from '@angular/core';



@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit , OnDestroy {
  private _selectedAppearence: boolean[] = [];
  constructor(private _carouselService: CarouselService) { }
  public carouselItems: CarouselItem[] = [];

  ngOnInit() {
    this._carouselService.getCarouselData().then( items => {
      this.carouselItems = items;
      this.setSelectionApperence(0,items);
    });
    this._carouselService.carouselDataChange$.subscribe( items => {
      this.carouselItems = items;
      this.setSelectionApperence(0,items);
    });
  }

  private setSelectionApperence(index: number, items: CarouselItem[]){
    this._selectedAppearence = [];
    items.forEach((item, i) => {
      this._selectedAppearence.push(false);
    });
    this._selectedAppearence[index] = true;
  }

  ngOnDestroy() {
  }

  itemSelected(index: number): void {
    this._carouselService.setSelected(index);
    this.setSelectionApperence(index,this.carouselItems);
  }
}
