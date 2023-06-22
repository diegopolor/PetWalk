import { createReducer, on } from '@ngrx/store'
import { OffersState } from "src/app/core/models/offers.state";

import {
    listAllOffers,
    filerByIdOffers,
    filterByDate,
    sortByHighPayOffers,
    sortByLowPayOffers,
    loadedOffers,
    errorOffers
} from '../actions/offers.actions'

const initialState: OffersState = {
    error: false,
    loading: false,
    offersList : []
}

export const offersRoducer = createReducer(
    initialState,
    on( 
        listAllOffers,
        filerByIdOffers,
        filterByDate,
        sortByHighPayOffers,
        sortByLowPayOffers,
        state => ({ ...state, loading: true })
    ),
    on(loadedOffers, (state, { offersList }) => ({ ...state, offersList, loading: false })),
    on(errorOffers, state => ({ ...state,  error: true, loading: false })),
) 