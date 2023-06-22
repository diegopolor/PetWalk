import { createSelector } from '@ngrx/store'
import { AppState } from '../app.state'
import { RequestState } from 'src/app/core/models/request.state'


const selectRequest = (state: AppState) => state.requests

export const selectRequestLoading = createSelector(
    selectRequest,
    (state: RequestState) => state.loading
)

export const selectRequestError = createSelector(
    selectRequest,
    (state: RequestState) => state.error
)

export const selectRequests = createSelector(
    selectRequest,
    (state: RequestState) => state.requestList
)