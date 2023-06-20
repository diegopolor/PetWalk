import { createAction, props } from '@ngrx/store'
import { caretakersActions } from './actions-name'
import { Caretaker } from 'src/app/core/models/caretaker.interface'

const { 
    listAll, 
    byId,
    sortAZ, 
    sortZA, 
    highStars, 
    lowStars,
    sortAge, 
    loaded, 
    error 
} = caretakersActions

export const listAllCaretakers       =    createAction(listAll)
export const filterByIdCaretakers    =    createAction(byId, props<{id : string}>())
export const sortAZCaretakers        =    createAction(sortAZ)
export const sortZACaretakers        =    createAction(sortZA)
export const sortByHighestStars      =    createAction(highStars)
export const sortByLowestStars       =    createAction(lowStars)
export const filterAgeCaretakers     =    createAction(sortAge, props<{age : number}>())
export const loadedCaretakers        =    createAction(loaded, props<{caretakerList : Caretaker[]}>())
export const errorloadedCaretakers   =    createAction(error)