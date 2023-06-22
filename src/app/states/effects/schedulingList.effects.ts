import { Injectable } from "@angular/core";
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError } from 'rxjs/operators';
import { of, Observable, mergeMap, EMPTY, switchMap } from 'rxjs';

import { schedulingActions } from '../actions/actions-name';
import { SchedulingService } from 'src/app/modules/scheduling/services/scheduling.service';


@Injectable()
export class SchedulingEffect {

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
                      map(schedulingList => ({ type: schedulingActions.loaded, schedulingList })),
                      catchError(() => of({ type: schedulingActions.error }))
                    )
                  )
              )
          );
      }

    loadSchedulingAllEffect$ = this.createCustomEffect(
        schedulingActions.listAll,
        () => this.schedulingService.getAllScheduling()
    );
    
    /**
    * Efecto para cargar datos de ofertas en función de diferentes acciones.
    * Maneja las acciones `byDate`, `byId` y `byRangePrice` y realiza las operaciones correspondientes.
    * 
    * @returns Un observable que emite acciones de carga exitosa o de error.
    */
    loadSchedulingffects$ = createEffect(() =>
        this.actions$.pipe(
          ofType(
            schedulingActions.byDate,
            schedulingActions.byCaretaker,
          ),
          switchMap((action: any) => {
            if (action.type === schedulingActions.byDate) {
              return this.schedulingService.filterByDate(action?.date);
            } else if (action.type === schedulingActions.byCaretaker) {
              return this.schedulingService.filterPerCaretaker(action?.caretakerName);
            } 
            return EMPTY;
          }),
          map(schedulingList => ({ type: schedulingActions.loaded, schedulingList })),
          catchError(() => of({ type: schedulingActions.error }))
        )
    );

    constructor(
      private actions$: Actions,
      private schedulingService: SchedulingService
    ) {}
}