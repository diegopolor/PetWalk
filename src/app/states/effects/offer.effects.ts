import { Injectable } from "@angular/core";
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError } from 'rxjs/operators';
import { of, Observable, mergeMap, EMPTY, switchMap } from 'rxjs';

import { offersActions } from '../actions/actions-name';
import { OfferService } from 'src/app/core/services/offer.service';


@Injectable()
export class OfferEffect {

    /**
    * Crea un efecto para manejar acciones específicas y realizar operaciones asincrónicas.
    *
    * @param actionType El tipo de acción que activará el efecto.
    * @param serviceMethod La función que representa la operación asincrónica a realizar.
    * @returns Un observable que emite acciones de carga exitosa o de error.
    */
    createCustomEffect = (actionType: string, serviceMethod: () => Observable<any>): Observable<Action> =>{
        return createEffect(() =>
          this.actions$.pipe(
                ofType(actionType),
                mergeMap(() =>
                  serviceMethod().pipe(
                    map(offerList => ({ type: offersActions.loaded, offerList })),
                    catchError(() => of({ type: offersActions.error }))
                  )
                )
            )
        );
    }

    loadOffersAllEffect$ = this.createCustomEffect(
        offersActions.listAll,
        () => this.offerService.getAllOffers(),
        
    );
    
    loadOfferSortByHighPayEffect$ = this.createCustomEffect(
        offersActions.highPay,
        () => this.offerService.sortByHighPay()
    );
    
    loadOffertSortByLowestPayEffect$ = this.createCustomEffect(
        offersActions.lowPay,
        () => this.offerService.sortByLowestPay()
    );

    /**
    * Efecto para cargar datos de ofertas en función de diferentes acciones.
    * Maneja las acciones `byDate`, `byId` y `byRangePrice` y realiza las operaciones correspondientes.
    * 
    * @returns Un observable que emite acciones de carga exitosa o de error.
    */
    loadOfferffects$ = createEffect(() =>
        this.actions$.pipe(
          ofType(
            offersActions.byDate,
            offersActions.byId,
            offersActions.byRangePrice,

          ),
          switchMap((action: any) => {
            if (action.type === offersActions.byId) {
              return this.offerService.filterById(action?.id);
            } else if (action.type === offersActions.byDate) {
              return this.offerService.filterByDate(action?.date);
            } else if (action.type === offersActions.byRangePrice) {
                return this.offerService.filterByPayPerHour(action?.maxPrice, action?.minPrice );
            }    
            return EMPTY;
          }),
          map(caretakerList => ({ type: offersActions.loaded, caretakerList })),
          catchError(() => of({ type: offersActions.error }))
        )
    );

    constructor(
      private actions$: Actions,
      private offerService: OfferService
    ) {}
}