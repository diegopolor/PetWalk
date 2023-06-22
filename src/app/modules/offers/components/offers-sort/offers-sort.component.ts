import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { sortByHighPayOffers, sortByLowPayOffers } from '../../../../states/actions/offers.actions';
import { SortOptions } from 'src/app/shared/interfaces/sortOptions.intertface';

@Component({
  selector: 'offers-sort',
  templateUrl: './offers-sort.component.html',
})
export class OffersSortComponent {
  sortOptions: SortOptions[] = [
    {
        name: 'Ordenar por ofertas de mayor pago',
        iconName: 'fa-dollar-sign',
        onClic: () => this.store.dispatch(sortByHighPayOffers())
    },
    {
        name: 'Ordenar por ofertas de menor pago',
        iconName: 'fa-dollar-sign',
        onClic: ()=> this.store.dispatch(sortByLowPayOffers())
    }
  ]
  constructor(private store: Store){}

}

