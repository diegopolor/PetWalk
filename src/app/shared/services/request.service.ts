import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class RequestService {

    constructor(private http: HttpClient){}

    getAllRequests(){
        return this.http.get('http://localhost:3000/request')
    }

    filterPerPetName(petName: string){
        return this.http.get(`http://localhost:3000/request?petName=${petName}`)
    }

    filterByDate(date: string){
        return this.http.get(`http://localhost:3000/scheduling?date=${date}`)
    }

}