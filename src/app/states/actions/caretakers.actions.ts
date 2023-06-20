import { createAction, props } from '@ngrx/store'
import { caretakerActions } from './actions-name'
import { Caretaker } from 'src/app/core/models/caretaker.interface'

const { 
    listAll, 
    sortAZ, 
    sortZA, 
    highStars, 
    lowStars,
    sortAge, 
    loaded, 
    error 
} = caretakerActions

export const listAllCaretakers       =    createAction(listAll)
export const filterSortAZCaretakers  =    createAction(sortAZ)
export const filterSortZACaretakers  =    createAction(sortZA)
export const filterByHighestStars    =    createAction(highStars)
export const filterByLowestStars     =    createAction(lowStars)
export const filterAgeCaretakers     =    createAction(sortAge, props<{age : number}>())
export const loadedCaretakers        =    createAction(loaded, props<{caretakerList : Caretaker[]}>())
export const errorloadedCaretakers   =    createAction(error)