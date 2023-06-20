import { createAction, props } from "@ngrx/store";
import { schedulingActions } from "./actions-name";
import { Scheduling } from "src/app/core/models/scheduling.interface";


const { listAll, byDate, byCaretaker, loaded, error } = schedulingActions

export const listAllScheduling    =    createAction(listAll)
export const filterByDateScheduling         =    createAction(byDate, props<{ date: string }>())
export const filterByCaretakerScheduling    =    createAction(byCaretaker, props<{ caretakerName: string }>())
export const loadedScheduling               =    createAction(loaded, props<{ schedulingList: Scheduling[] }>())
export const errorScheduling                =    createAction(error)
