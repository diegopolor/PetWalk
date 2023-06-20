import { Injectable } from "@angular/core";
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError } from 'rxjs/operators';
import { of, Observable, mergeMap, switchMap, EMPTY } from 'rxjs';

import { caretakersActions } from '../actions/actions-name';
import { CaretakerService } from '../../core/services/caretaker.service';

@Injectable()
export class CaretakerEffect {

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
                  map(caretakerList => ({ type: caretakersActions.loaded, caretakerList })),
                  catchError(() => of({ type: caretakersActions.error }))
                )
              )
          )
      );
    }


    loadCaretakerAllEffect$ = this.createCustomEffect(
        caretakersActions.listAll,
        () => this.caretakerService.getAllCaretakers()
    );
    
    loadCaretakerSortAZEffect$ = this.createCustomEffect(
        caretakersActions.sortAZ,
        () => this.caretakerService.filterSortAZCaretakers()
    );
    
    loadCaretakerSortZAEffect$ = this.createCustomEffect(
        caretakersActions.sortZA,
        () => this.caretakerService.filterSortZACaretakers()
    );

    loadCaretakerHighestStarsEffect$ = this.createCustomEffect(
        caretakersActions.highStars,
        () => this.caretakerService.filterByHighestStars()
    );

    loadCaretakerLowestStarsEffect$ = this.createCustomEffect(
        caretakersActions.lowStars,
        () => this.caretakerService.filterByLowestStars()
    );

    /**
    * Efecto para cargar datos de cuidadores en función de diferentes acciones.
    * Maneja las acciones `sortAge` y `listById` y realiza las operaciones correspondientes.
    * 
    * @returns Un observable que emite acciones de carga exitosa o de error.
    */
    loadCaretakerEffects$ = createEffect(() =>
        this.actions$.pipe(
          ofType(
            caretakersActions.sortAge,
            caretakersActions.byId
          ),
          switchMap((action: any) => {
            if (action.type === caretakersActions.sortAge) {
              return this.caretakerService.filterSortAgeCaretakers(action?.age);
            } else if (action.type === caretakersActions.byId) {
              return this.caretakerService.getCaretakersById(action?.id);
            }
            return EMPTY;
          }),
          map(caretakerList => ({ type: caretakersActions.loaded, caretakerList })),
          catchError(() => of({ type: caretakersActions.error }))
        )
    );

    constructor(
      private actions$: Actions,
      private caretakerService: CaretakerService
    ) {}
}