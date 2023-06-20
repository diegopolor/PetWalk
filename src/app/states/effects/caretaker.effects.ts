import { Action } from '@ngrx/store';
import { Actions,createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { map, catchError, exhaustMap } from 'rxjs/operators';
import { of, Observable, mergeMap } from 'rxjs';

import { caretakerActions } from '../actions/actions-name';
import { TenantService } from '../../tenant/services/tentant.service';

@Injectable()
export class CaretakerEffect {
 
    createCaretakerEffect = (actionType: string, serviceMethod: () => Observable<any>): Observable<Action> =>
        createEffect(() =>
          this.actions$.pipe(
            ofType(actionType),
            mergeMap(() =>
              serviceMethod().pipe(
                map(caretakerList => ({ type: caretakerActions.loaded, caretakerList })),
                catchError(() => of({ type: caretakerActions.error }))
              )
            )
        )
    );

    loadCaretakerAllEffect$ = this.createCaretakerEffect(
        caretakerActions.listAll,
        () => this.tenantService.getAllCaretakers()
    );
    
    loadCaretakerSortAZEffect$ = this.createCaretakerEffect(
        caretakerActions.sortAZ,
        () => this.tenantService.filterSortAZCaretakers()
    );
    
    loadCaretakerSortZAEffect$ = this.createCaretakerEffect(
        caretakerActions.sortZA,
        () => this.tenantService.filterSortZACaretakers()
    );

    loadCaretakerHighestStarsEffect$ = this.createCaretakerEffect(
        caretakerActions.highStars,
        () => this.tenantService.filterByHighestStars()
    );

    loadCaretakerLowestStarsEffect$ = this.createCaretakerEffect(
        caretakerActions.lowStars,
        () => this.tenantService.filterByLowestStars()
    );

    loadCaretakerSortAgeEffect$ = createEffect(() =>
        this.actions$.pipe(
          ofType(caretakerActions.sortAge),
          exhaustMap((action : any) =>
            this.tenantService.filterSortAgeCaretakers(action.age).pipe(
              map(caretakerList => ({ type: caretakerActions.loaded, caretakerList })),
              catchError(() => of({ type: caretakerActions.error }))
            )
          )
        )
    );

    constructor(
      private actions$: Actions,
      private tenantService: TenantService
    ) {}
}