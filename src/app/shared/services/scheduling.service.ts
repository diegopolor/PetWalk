import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class SchedulingService {

    constructor(private http: HttpClient){}

    getAllScheduling(){
        return this.http.get('http://localhost:3000/scheduling')
    }

    filterPerCaretaker(caretakersName: string){
        return this.http.get(`http://localhost:3000/scheduling?name=${caretakersName}`)
    }

    filterByDate(date: string){
        return this.http.get(`http://localhost:3000/scheduling?date=${date}`)
    }

}