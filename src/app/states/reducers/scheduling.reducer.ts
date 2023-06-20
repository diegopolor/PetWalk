import { createReducer, on } from '@ngrx/store'

import { 
    listAllScheduling,
    filterByDateScheduling,
    filterByCaretakerScheduling,
    loadedScheduling,
    errorScheduling
} from '../actions/scheduling.actions'
import { SchedulingState } from 'src/app/core/models/scheduling.state'


const initialState: SchedulingState = {
    error: false,
    loading: false,
    schedulingList : []
}

export const schedulingRoducer = createReducer(
    initialState,
    on( 
        listAllScheduling,
        filterByDateScheduling,
        filterByCaretakerScheduling,
        state => ({ ...state, loading: true })
    ),
    on(loadedScheduling, (state, { schedulingList }) => ({ ...state, schedulingList, loading: false })),
    on(errorScheduling, state => ({ ...state,  error: true, loading: false })),
) 