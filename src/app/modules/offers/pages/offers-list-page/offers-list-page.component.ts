import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Offers } from 'src/app/core/models/offers.interface';
import { listAllOffers } from 'src/app/states/actions/offers.actions';
import { AppState } from 'src/app/states/app.state';
import { selectOfferLoading, selectOfferList } from '../../../../states/selector/offers.selector';

@Component({
  selector: 'offers-list-page',
  templateUrl: './offers-list-page.component.html',
})
export class OffersListPageComponent {
  offers$: Observable<Offers[]> = new Observable()
  loading$: Observable<boolean> = new Observable() 
  error$: Observable<boolean> = new Observable() 

  constructor(private store: Store<AppState>){}

  ngOnInit(): void {
    this.store.dispatch(listAllOffers())
    this.loading$ = this.store.select(selectOfferLoading)
    this.offers$ = this.store.select(selectOfferList)

    this.offers$.subscribe(data => {
      console.log('DATA')
      console.log(data)
     })
  }
}
