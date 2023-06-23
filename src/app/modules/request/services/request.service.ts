import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environments } from "src/environments/environments";

@Injectable({
    providedIn: 'root'
})
export class RequestService {

    private baseUrl = environments.baseUrl

    constructor(private http: HttpClient){}

    getAllRequests(){
        return this.http.get(`${ this.baseUrl }/requests`)
    }

    filterPerPetName(petName: string){
        return this.http.get(`${ this.baseUrl }/requests?petName=${petName}`)
    }

    filterByDate(date: string){
        return this.http.get(`${ this.baseUrl }/requests?date=${date}`)
    }

}