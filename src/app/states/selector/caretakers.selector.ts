import { createSelector } from '@ngrx/store'
import { AppState } from '../app.state'
import { CaretakersState } from 'src/app/core/models/caretaker.state'


const selectCaretaker = (state: AppState) => state.caretakers

export const selectCaretakerLoading = createSelector(
    selectCaretaker,
    (state: CaretakersState) => state.loading
)

export const selectCaretakerError = createSelector(
    selectCaretaker,
    (state: CaretakersState) => state.loading
)

export const selectCaretakers = createSelector(
    selectCaretaker,
    (state: CaretakersState) => state.caretakerList
)