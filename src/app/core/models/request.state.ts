import { Request } from "./request.interface";

export interface RequestState {
    requestList :    Request[]
    loading:         boolean
    error:           boolean
}
