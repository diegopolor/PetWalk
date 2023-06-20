import { createReducer, on } from '@ngrx/store'
import { CaretakersState } from 'src/app/core/models/caretaker.state'
import { 
    listAllCaretakers, 
    filterSortAZCaretakers, 
    filterSortZACaretakers,
    filterByHighestStars,
    filterByLowestStars, 
    loadedCaretakers,
    errorloadedCaretakers 
} from '../actions/caretakers.actions'



const initialState: CaretakersState = {
    error: false,
    loading: false,
    caretakerList : []
}

export const caretakersRoducer = createReducer(
    initialState,
    on(listAllCaretakers, state => ({ ...state, loading: true })),
    on(filterSortAZCaretakers, state => ({ ...state, loading: true })),
    on(filterSortZACaretakers, state => ({ ...state, loading: true })),
    on(filterByHighestStars, state =>   ({ ...state, loading: true })),
    on(filterByLowestStars, state =>    ({ ...state, loading: true })),
    on(loadedCaretakers, (state, { caretakerList }) => ({ ...state, caretakerList,loading: false })),
    on(errorloadedCaretakers, state => ({ ...state,  error: true, loading: false })),
) 