import { createSelector } from '@ngrx/store'
import { AppState } from '../app.state'
import { OffersState } from 'src/app/core/models/offers.state'

const selectOffers = (state: AppState) => state.offers

export const selectCaretakerLoading = createSelector(
    selectOffers,
    (state: OffersState) => state.loading
)

export const selectCaretakerError = createSelector(
    selectOffers,
    (state: OffersState) => state.error
)

export const selectCaretakers = createSelector(
    selectOffers,
    (state: OffersState) => state.offerList
)