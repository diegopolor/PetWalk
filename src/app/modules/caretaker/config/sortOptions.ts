import { inject } from '@angular/core';
import { Store } from "@ngrx/store"
import { SortOptions } from 'src/app/shared/interfaces/sortOptions.intertface';
import { 
    sortAZCaretakers, 
    sortZACaretakers, 
    sortByHighestStars, 
    sortByLowestStars
} from 'src/app/states/actions/caretakers.actions';
import { AppState } from 'src/app/states/app.state';

const store = new Store(AppState)

export const sortOptions: SortOptions[] = [
    {
        name: 'Ordenar de la A a la Z',
        iconName: 'fa-sort-alpha-down',
        onClic: store.dispatch(sortAZCaretakers())
    },
    {
        name: 'Ordenar de la Z a la A',
        iconName: 'fa-sort-alpha-down-alt',
        onClic: store.dispatch(sortZACaretakers())
    },
    {
        name: 'Ordenar por mas estrellas',
        iconName: 'fa-star',
        onClic: store.dispatch(sortByHighestStars())
    },
    {
        name: 'Ordenar por menos estrellas',
        iconName: 'fa-star',
        onClic:store.dispatch(sortByLowestStars())
    }
]