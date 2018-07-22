import { Component, OnInit } from '@angular/core';

// This component uses a service that searches the data from json saved in assets.
// Finally the result is dispatched to ngrx store.
// Carousel module or Card module can update itself by observable of ngrx store.
// Carousal module also dispatches action to store when a thumbnail gets selected.
// Card module can update itself for the observable.

@Component({
  selector: 'app-cards-search',
  templateUrl: './cards-search.component.html',
  styleUrls: ['./cards-search.component.css']
})
export class CardsSearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
