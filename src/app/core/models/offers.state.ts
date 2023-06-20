
import { Offers } from "./offers.interface";

export interface OffersState {
    offerList :      Offers[]
    loading:         boolean
    error:           boolean
}
