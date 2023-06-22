import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { filterByDate, listAllOffers } from 'src/app/states/actions/offers.actions';

@Component({
  selector: 'offers-filter',
  templateUrl: './offers-filter.component.html',
})
export class OffersFilterComponent {

  maxPrice : string = ''
  minPrice : string = ''
  date     : string = ''

  constructor(private store: Store){}

  resetData(){
    this.store.dispatch(listAllOffers())
  }

  setDate(date: string){
    this.date = date
  }

  filterByDate(date:string ){
    if(date.trim() == '') return
    this.store.dispatch(filterByDate({ date }))
  }

}
