import { createSelector } from '@ngrx/store'
import { AppState } from '../app.state'
import { OffersState } from 'src/app/core/models/offers.state'

const selectOffers = (state: AppState) => state.offers

export const selectOfferLoading = createSelector(
    selectOffers,
    (state: OffersState) => state.loading
)

export const selectOfferError = createSelector(
    selectOffers,
    (state: OffersState) => state.error
)

export const selectOfferList = createSelector(
    selectOffers,
    (state: OffersState) => state.offersList
)