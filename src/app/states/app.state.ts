import { ActionReducerMap } from "@ngrx/store";
import { CaretakersState } from "../core/models/caretaker.state";
import { caretakersRoducer } from "./reducers/caretakers.reducers";

export interface AppState {
    caretakers: CaretakersState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    caretakers : caretakersRoducer
}