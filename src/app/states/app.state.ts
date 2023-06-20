import { ActionReducerMap } from "@ngrx/store";
import { CaretakersState } from "../core/models/caretaker.state";
import { caretakersRoducer } from "./reducers/caretakers.reducers";
import { OffersState } from "../core/models/offers.state";
import { offersRoducer } from "./reducers/offers.reducers";
import { SchedulingState } from "../core/models/scheduling.state";
import { schedulingRoducer } from "./reducers/scheduling.reducer";
import { RequestState } from "../core/models/request.state";
import { requestRoducer } from "./reducers/request.reducer";

export interface AppState {
    caretakers: CaretakersState
    offers: OffersState,
    schedulings: SchedulingState
    requests: RequestState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    caretakers : caretakersRoducer,
    offers: offersRoducer,
    schedulings: schedulingRoducer,
    requests: requestRoducer
}