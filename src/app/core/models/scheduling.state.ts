import { Scheduling } from "./scheduling.interface";

export interface SchedulingState {
    schedulingList : Scheduling[]
    loading:         boolean
    error:           boolean
}
