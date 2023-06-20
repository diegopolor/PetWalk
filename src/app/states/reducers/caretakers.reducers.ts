import { createReducer, on } from '@ngrx/store'
import { CaretakersState } from 'src/app/core/models/caretaker.state'
import { 
    listAllCaretakers, 
    sortAZCaretakers, 
    sortZACaretakers,
    sortByHighestStars,
    sortByLowestStars, 
    loadedCaretakers,
    errorloadedCaretakers, 
    filterByIdCaretakers
} from '../actions/caretakers.actions'


const initialState: CaretakersState = {
    error: false,
    loading: false,
    caretakerList : []
}

export const caretakersRoducer = createReducer(
    initialState,
    on( 
        listAllCaretakers,
        filterByIdCaretakers,
        sortAZCaretakers,
        sortZACaretakers,
        sortByHighestStars,
        sortByLowestStars, 
        state => ({ ...state, loading: true })
    ),
    on(loadedCaretakers, (state, { caretakerList }) => ({ ...state, caretakerList, loading: false })),
    on(errorloadedCaretakers, state => ({ ...state,  error: true, loading: false })),
) 