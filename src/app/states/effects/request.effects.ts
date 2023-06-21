import { Injectable } from "@angular/core";
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError } from 'rxjs/operators';
import { of, Observable, mergeMap, EMPTY, switchMap } from 'rxjs';

import { requestActions } from '../actions/actions-name';
import { RequestService } from "src/app/shared/services/request.service";


@Injectable()
export class RequestEffect {

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
                    map(requestList => ({ type: requestActions.loaded, requestList })),
                    catchError(() => of({ type: requestActions.error }))
                  )
                )
            )
        );
    }

    loadRequestAllEffect$ = this.createCustomEffect(
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
      private RequestService: RequestService
    ) {}
}