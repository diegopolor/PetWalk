import { createSelector } from '@ngrx/store'
import { AppState } from '../app.state'
import { RequestState } from 'src/app/core/models/request.state'


const selectRequest = (state: AppState) => state.requests

export const selectCaretakerLoading = createSelector(
    selectRequest,
    (state: RequestState) => state.loading
)

export const selectCaretakerError = createSelector(
    selectRequest,
    (state: RequestState) => state.error
)

export const selectCaretakers = createSelector(
    selectRequest,
    (state: RequestState) => state.requestList
)