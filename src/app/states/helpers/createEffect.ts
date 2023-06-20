import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError } from 'rxjs/operators';
import { of, Observable, mergeMap  } from 'rxjs';
import { caretakersActions, offersActions, requestActions, schedulingActions } from '../actions/actions-name';

type GeneralActions = typeof schedulingActions |
                      typeof caretakersActions | 
                      typeof offersActions |
                      typeof requestActions


/**
* Crea un efecto para manejar acciones específicas y realizar operaciones asincrónicas.
*
* @param actionType El tipo de acción que activará el efecto.
* @param serviceMethod La función que representa la operación asincrónica a realizar.
* @returns Un observable que emite acciones de carga exitosa o de error.
*/

export const createCustomEffect = (actionType: string, actions: GeneralActions, serviceMethod: () => Observable<any>): Observable<Action> =>{

  const actions$: Actions = new Actions()
  return createEffect(() =>
        actions$.pipe(
          ofType(actionType),
          mergeMap(() =>
            serviceMethod().pipe(
              map(caretakerList => ({ type: actions.loaded, caretakerList })),
              catchError(() => of({ type: actions.error }))
            )
          )
      )
  );

}
    
