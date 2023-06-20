import { createReducer, on } from '@ngrx/store'
import { OffersState } from "src/app/core/models/offers.state";

import {
    listAllOffers,
    filerByIdOffers,
    filterByRangePriceOffers,
    filterByDateOffers,
    sortByHighPayOffers,
    sortByLowPayOffers,
    loadedOffers,
    errorOffers
} from '../actions/offers.actions'

const initialState: OffersState = {
    error: false,
    loading: false,
    offerList : []
}

export const offersRoducer = createReducer(
    initialState,
    on( 
        listAllOffers,
        filerByIdOffers,
        filterByRangePriceOffers,
        filterByDateOffers,
        sortByHighPayOffers,
        sortByLowPayOffers,
        state => ({ ...state, loading: true })
    ),
    on(loadedOffers, (state, { offerList }) => ({ ...state, offerList, loading: false })),
    on(errorOffers, state => ({ ...state,  error: true, loading: false })),
) 