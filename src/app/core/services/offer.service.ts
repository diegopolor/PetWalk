import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Offers } from "src/app/core/models/offers.interface";


@Injectable({
    providedIn: 'root'
})
export class OfferService {
    constructor(private http: HttpClient){}

    getAllOffers(){
        return this.http.get<Offers[]>('http://localhost:3000/offers')
    }

    filterById(id: number){
        return this.http.get<Offers[]>(`http://localhost:3000/offers?id=${id}`)
    }

    filterByPayPerHour(maxPrice: number, minPrice: number){
        return this.http.get<Offers[]>(`http://localhost:3000/offers?payPerHour=${minPrice}&payPerHour=${maxPrice}`)
    }

    filterByDate(date: string){
        return this.http.get<Offers[]>(`http://localhost:3000/offers?date=${date}`)
    }

    sortByHighPay(){
        return this.http.get<Offers[]>('http://localhost:3000/offers?_sort=payPerHour&_order=desc')
    }

    sortByLowestPay(){
        return this.http.get<Offers[]>('http://localhost:3000/offers?_sort=payPerHour&_order=asc')
    }
    

}