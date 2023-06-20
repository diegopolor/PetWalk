import { createAction, props } from '@ngrx/store'
import { offersActions } from './actions-name'
import { Offers } from 'src/app/core/models/offers.interface'

const { listAll, byId, byRangePrice, byDate, highPay, lowPay, loaded, error } = offersActions

export const listAllOffers            =      createAction(listAll)
export const filerByIdOffers          =      createAction(byId, props<{ id: string }>())
export const filterByRangePriceOffers =      createAction(byRangePrice, props<{ maxPrice: number, minPrice: number }>())
export const filterByDateOffers       =      createAction(byDate, props<{date: string}>())
export const sortByHighPayOffers      =      createAction(highPay)
export const sortByLowPayOffers       =      createAction(lowPay)
export const loadedOffers             =      createAction(loaded, props<{ offerList: Offers[] }>())
export const errorOffers              =      createAction(error)
