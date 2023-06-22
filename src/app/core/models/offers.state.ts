
import { Offers } from "./offers.interface";

export interface OffersState {
    offersList :     Offers[]
    loading:         boolean
    error:           boolean
}
