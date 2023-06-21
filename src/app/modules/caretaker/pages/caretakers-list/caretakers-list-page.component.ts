import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/states/app.state';
import { Caretaker } from 'src/app/core/models/caretaker.interface';

import {
  selectCaretakerLoading,
  selectCaretakers 
} from 'src/app/states/selector/caretakers.selector';

import { 
  listAllCaretakers,
  filterByIdCaretakers,
  filterByName
} from 'src/app/states/actions/caretakers.actions';


@Component({
  selector: 'page-caretakers-list',
  templateUrl: './caretakers-list-page.component.html',
  styles: [
  ]
})
export class CaretakersListPageComponent implements OnInit{

  caretakers$: Observable<Caretaker[]> = new Observable()
  loading$: Observable<boolean> = new Observable() 
  error$: Observable<boolean> = new Observable() 

  constructor(private store: Store<AppState>){}

  ngOnInit(): void {
    this.store.dispatch(listAllCaretakers())
    this.loading$ = this.store.select(selectCaretakerLoading)
    this.caretakers$ = this.store.select(selectCaretakers)
  }
}
