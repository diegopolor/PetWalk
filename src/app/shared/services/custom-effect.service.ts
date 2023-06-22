import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, catchError, map, mergeMap, of } from "rxjs";
import { caretakersActions, offersActions, requestActions, schedulingActions } from "src/app/states/actions/actions-name";
import { StoreList } from "../types/store-list.type";



type CustomActions = typeof caretakersActions | typeof offersActions | typeof schedulingActions | typeof requestActions

@Injectable({
    providedIn: 'root'
})
export class CustomEffectService {

    storeList = {
        caretakerList:  (data: any)=> ({ caretakerList: data }),
        offersList:     (data: any)=> ({ offersList: data }),
        schedulingList: (data: any)=> ({ schedulingList: data }),
        requestList:    (data: any)=> ({ requestList: data })
    }

    /**
    * Crea un efecto para manejar acciones específicas y realizar operaciones asincrónicas.
    *
    * @param actionType El tipo de acción que activará el efecto.
    * @param serviceMethod La función que representa la operación asincrónica a realizar.
    * @returns Un observable que emite acciones de carga exitosa o de error.
    */
    createCustomEffect = (listName: StoreList, actions: CustomActions, actionType: string, serviceMethod: () => Observable<any>): Observable<Action> =>{
        
        return createEffect (() =>
          this.actions$.pipe(
                ofType(actionType),
                mergeMap(() =>
                  serviceMethod().pipe(
                    map(data => ({ type: actions.loaded, ...(this.storeList[listName](data)) })),
                    catchError(() => of({ type: actions.error }))
                  )
                )
            )
        );
    }

    constructor(
        private actions$: Actions,
    ) {}
}