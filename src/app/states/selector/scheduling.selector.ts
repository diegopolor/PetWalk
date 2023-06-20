import { createSelector } from '@ngrx/store'
import { AppState } from '../app.state'
import { SchedulingState } from 'src/app/core/models/scheduling.state'


const selectCaretaker = (state: AppState) => state.schedulings

export const selectCaretakerLoading = createSelector(
    selectCaretaker,
    (state: SchedulingState) => state.loading
)

export const selectCaretakerError = createSelector(
    selectCaretaker,
    (state: SchedulingState) => state.error
)

export const selectCaretakers = createSelector(
    selectCaretaker,
    (state: SchedulingState) => state.schedulingList
)