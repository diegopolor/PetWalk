import { createAction, props } from '@ngrx/store'
import { offersActions } from './actions-name'
import { Offers } from 'src/app/core/models/offers.interface'

const { listAll, byId, byDate, highPay, lowPay, loaded, error } = offersActions

export const listAllOffers                     =      createAction(listAll)
export const filerByIdOffers                   =      createAction(byId, props<{ id: string }>())
export const filterByDate                      =      createAction(byDate, props<{ date: string }>())
export const sortByHighPayOffers               =      createAction(highPay)
export const sortByLowPayOffers                =      createAction(lowPay)
export const loadedOffers                      =      createAction(loaded, props<{ offersList: Offers[] }>())
export const errorOffers                       =      createAction(error)
