import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError } from 'rxjs/operators';
import { of, EMPTY, switchMap } from 'rxjs';

import { requestActions } from '../actions/actions-name';
import { RequestService } from "src/app/modules/request/services/request.service";
import { CustomEffectService } from '../../shared/services/custom-effect.service';
import { StoreList } from "src/app/shared/types/store-list.type";


@Injectable()
export class RequestEffect {

    list: StoreList = 'requestList'

    loadRequestAllEffect$ = this.customEffectService.createCustomEffect(
        this.list,
        requestActions,
        requestActions.listAll,
        () => this.RequestService.getAllRequests()
    );
    
    /**
    * Efecto para cargar datos de programación en función de diferentes acciones.
    * Maneja las acciones `byDate` y `byCaretaker` y realiza las operaciones correspondientes.
    * 
    * @returns Un observable que emite acciones de carga exitosa o de error.
    */
    loadRequestffects$ = createEffect(() =>
        this.actions$.pipe(
          ofType(
            requestActions.byDate,
            requestActions.byPetName,
          ),
          switchMap((action: any) => {
            if (action.type === requestActions.byDate) {
              return this.RequestService.filterByDate(action?.date);
            } else if (action.type === requestActions.byPetName) {
              return this.RequestService.filterPerPetName(action?.petName);
            } 
            return EMPTY;
          }),
          map(requestList => ({ type: requestActions.loaded, requestList })),
          catchError(() => of({ type: requestActions.error }))
        )
    );

    constructor(
      private actions$: Actions,
      private RequestService: RequestService,
      private customEffectService: CustomEffectService
    ) {}
}