import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError } from 'rxjs/operators';
import { of, switchMap, EMPTY } from 'rxjs';

import { caretakersActions } from '../actions/actions-name';
import { CaretakerService } from "src/app/modules/caretaker/services/caretaker.service";
import { CustomEffectService } from '../../shared/services/custom-effect.service';
import { StoreList } from "src/app/shared/types/store-list.type";

@Injectable()
export class CaretakerEffect {
    list: StoreList = 'caretakerList'

    loadCaretakerAllEffect$ = this.customEffectService.createCustomEffect(
        this.list,
        caretakersActions,
        caretakersActions.listAll,
        () => this.caretakerService.getAllCaretakers()
    );
    
    loadCaretakerSortAZEffect$ = this.customEffectService.createCustomEffect(
        this.list,
        caretakersActions,
        caretakersActions.sortAZ,
        () => this.caretakerService.filterSortAZCaretakers()
    );
    
    loadCaretakerSortZAEffect$ = this.customEffectService.createCustomEffect(
      this.list,
      caretakersActions,
        caretakersActions.sortZA,
        () => this.caretakerService.filterSortZACaretakers()
    );

    loadCaretakerHighestStarsEffect$ = this.customEffectService.createCustomEffect(
        this.list,
        caretakersActions,
        caretakersActions.highStars,
        () => this.caretakerService.filterByHighestStars()
    );

    loadCaretakerLowestStarsEffect$ = this.customEffectService.createCustomEffect(
        this.list,
        caretakersActions,
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
            caretakersActions.byId,
            caretakersActions.byName
          ),
          switchMap((action: any) => {
            if (action.type === caretakersActions.sortAge) {
              return this.caretakerService.filterSortAgeCaretakers(action?.age);
            } else if (action.type === caretakersActions.byId) {
              return this.caretakerService.getCaretakersById(action?.id);
            } else if (action.type === caretakersActions.byName) {
              return this.caretakerService.getCaretakerByName(action?.name);
            }
            return EMPTY;
          }),
          map(caretakerList => ({ type: caretakersActions.loaded, caretakerList })),
          catchError(() => of({ type: caretakersActions.error }))
        )
    );

    constructor(
      private actions$: Actions,
      private caretakerService: CaretakerService,
      private customEffectService: CustomEffectService
    ) {}
}