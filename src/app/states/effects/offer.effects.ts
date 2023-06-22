import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError } from 'rxjs/operators';
import { of, EMPTY, switchMap } from 'rxjs';

import { offersActions } from '../actions/actions-name';
import { OfferService } from 'src/app/modules/offers/services/offer.service';
import { CustomEffectService } from "src/app/shared/services/custom-effect.service";
import { StoreList } from "src/app/shared/types/store-list.type";


@Injectable()
export class OfferEffect {

    list: StoreList = 'offersList'

    loadOffersAllEffect$ = this.customEffectService.createCustomEffect(
        this.list,
        offersActions,
        offersActions.listAll,
        () => this.offerService.getAllOffers(),
        
    );
    
    loadOfferSortByHighPayEffect$ = this.customEffectService.createCustomEffect(
        this.list,
        offersActions,
        offersActions.highPay,
        () => this.offerService.sortByHighPay()
    );
    
    loadOffertSortByLowestPayEffect$ = this.customEffectService.createCustomEffect(
        this.list,
        offersActions,
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
            offersActions.byId,
            offersActions.byDate,

          ),
          switchMap((action: any) => {
            if (action.type === offersActions.byId) {
              return this.offerService.filterById(action?.id);
            } else if (action.type === offersActions.byDate) {
              return this.offerService.filterByDate(action?.date );
            }    
            return EMPTY;
          }),
          map(offersList => ({ type: offersActions.loaded, offersList })),
          catchError(() => of({ type: offersActions.error }))
        )
    );

    constructor(
      private actions$: Actions,
      private offerService: OfferService,
      private customEffectService: CustomEffectService
    ) {}
}