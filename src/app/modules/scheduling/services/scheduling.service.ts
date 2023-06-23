import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environments } from "src/environments/environments";


@Injectable({
    providedIn: 'root'
})
export class SchedulingService {

    private baseUrl = environments.baseUrl

    constructor(private http: HttpClient){}

    getAllScheduling(){
        return this.http.get(`${ this.baseUrl }/scheduling`)
    }

    filterPerCaretaker(caretakersName: string){
        return this.http.get(`${ this.baseUrl }/scheduling?name=${caretakersName}`)
    }

    filterByDate(date: string){
        return this.http.get(`${ this.baseUrl }/scheduling?date=${date}`)
    }

}