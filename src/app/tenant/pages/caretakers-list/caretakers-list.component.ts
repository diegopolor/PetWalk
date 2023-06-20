import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import {
  selectCaretakerLoading,
  selectCaretakers 
} from 'src/app/states/selector/caretakers.selector';

import { 
  listAllCaretakers, 
  filterSortAZCaretakers, 
  filterSortZACaretakers,
  filterByHighestStars,
  filterByLowestStars,
  filterAgeCaretakers
} from 'src/app/states/actions/caretakers.actions';

import { AppState } from 'src/app/states/app.state';
import { Caretaker } from 'src/app/core/models/caretaker.interface';


@Component({
  selector: 'app-caretakers-list',
  templateUrl: './caretakers-list.component.html',
  styles: [
  ]
})
export class CaretakersListComponent implements OnInit{

  caretakers$: Observable<Caretaker[]> = new Observable()
  loading$: Observable<boolean> = new Observable() 
  error$: Observable<boolean> = new Observable() 

  constructor(private store: Store<AppState>){}

  ngOnInit(): void {
    this.store.dispatch(listAllCaretakers())
    this.loading$ = this.store.select(selectCaretakerLoading)
    this.caretakers$ = this.store.select(selectCaretakers)
  }

  sortAZ(){
    this.store.dispatch(filterSortAZCaretakers())
  }

  sortZA(){
    this.store.dispatch(filterSortZACaretakers())
  }

  highStars(){
    this.store.dispatch(filterByHighestStars())
  }

  lowestStars(){
    this.store.dispatch(filterByLowestStars())
  }

  sortAge(){
    this.store.dispatch(filterAgeCaretakers({age: 20 }))
  }
}
