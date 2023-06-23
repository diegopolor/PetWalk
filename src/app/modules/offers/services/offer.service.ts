import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Offers } from "src/app/core/models/offers.interface";
import { environments } from "src/environments/environments";


@Injectable({
    providedIn: 'root'
})
export class OfferService {

    private baseUrl = environments.baseUrl

    constructor(private http: HttpClient){}

    getAllOffers(){
        return this.http.get<Offers[]>(`${ this.baseUrl }/offers`)
    }

    filterById(id: number){
        return this.http.get<Offers[]>(`${ this.baseUrl }/offers?id=${id}`)
    }

    filterByDate(date: string){
        return this.http.get<Offers[]>(`${ this.baseUrl }/offers?date=${date}`)
    }

    sortByHighPay(){
        return this.http.get<Offers[]>(`${ this.baseUrl }/offers?_sort=payPerHour&_order=desc`)
    }

    sortByLowestPay(){
        return this.http.get<Offers[]>(`${ this.baseUrl }/offers?_sort=payPerHour&_order=asc`)
    }
    
}