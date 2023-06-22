import { createSelector } from '@ngrx/store'
import { AppState } from '../app.state'
import { SchedulingState } from 'src/app/core/models/scheduling.state'


const selectScheduling = (state: AppState) => state.schedulings

export const selectSchedulingLoading = createSelector(
    selectScheduling,
    (state: SchedulingState) => state.loading
)

export const selectSchedulingError = createSelector(
    selectScheduling,
    (state: SchedulingState) => state.error
)

export const selectSchedulings = createSelector(
    selectScheduling,
    (state: SchedulingState) => state.schedulingList
)