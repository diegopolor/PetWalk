import { Caretaker } from "./caretaker.interface";

export interface CaretakersState {
    caretakerList :  Caretaker[]
    loading:         boolean
    error:           boolean
}
