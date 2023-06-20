import { createSelector } from '@ngrx/store'
import { AppState } from '../app.state'
import { RequestState } from 'src/app/core/models/request.state'


const selectCaretaker = (state: AppState) => state.requests

export const selectCaretakerLoading = createSelector(
    selectCaretaker,
    (state: RequestState) => state.loading
)

export const selectCaretakerError = createSelector(
    selectCaretaker,
    (state: RequestState) => state.error
)

export const selectCaretakers = createSelector(
    selectCaretaker,
    (state: RequestState) => state.requestList
)