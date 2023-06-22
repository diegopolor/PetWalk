import { createReducer, on } from '@ngrx/store'

import { 
    listAllRequest,
    filterByDateRequest,
    filterByPetNameRequest,
    loadedRequest,
    errorRequest,
} from '../actions/request.actions'
import { RequestState } from 'src/app/core/models/request.state'


const initialState: RequestState = {
    error: false,
    loading: false,
    requestList : []
}

export const requestRoducer = createReducer(
    initialState,
    on( 
        listAllRequest,
        filterByDateRequest,
        filterByPetNameRequest,
        state => ({ ...state, loading: true })
    ),
    on(loadedRequest, (state, { requestList }) => ({ ...state, requestList, loading: false })),
    on(errorRequest, state => ({ ...state,  error: true, loading: false })),
) 