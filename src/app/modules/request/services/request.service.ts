import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class RequestService {

    constructor(private http: HttpClient){}

    getAllRequests(){
        return this.http.get('http://localhost:3000/requests')
    }

    filterPerPetName(petName: string){
        return this.http.get(`http://localhost:3000/requests?petName=${petName}`)
    }

    filterByDate(date: string){
        return this.http.get(`http://localhost:3000/requests?date=${date}`)
    }

}