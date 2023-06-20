import { Actions,createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { of, switchMap, EMPTY  } from 'rxjs';

import { schedulingActions } from '../actions/actions-name';
import { SchedulingService } from 'src/app/core/services/scheduling.service';
import { createCustomEffect } from '../helpers/createEffect';


@Injectable()
export class SchedulingEffect {

    loadSchedulingAllEffect$ = createCustomEffect(
        schedulingActions.listAll,
        schedulingActions,
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