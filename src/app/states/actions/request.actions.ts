import { createAction, props } from "@ngrx/store";
import { requestActions } from "./actions-name";
import { Request } from "src/app/core/models/request.interface";

const { listAll, byDate, byPetName, loaded, error } = requestActions

export const listAllRequest              =     createAction(listAll)
export const filterByDateRequest         =     createAction(byDate, props<{ date: string }>())
export const filterByCaretakerRequest    =     createAction(byPetName, props<{ petName: string }>())
export const loadedRequest               =     createAction(loaded, props<{ requestList: Request[] }>())
export const errorRequest                =     createAction(error)
