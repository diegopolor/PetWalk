import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Caretaker } from 'src/app/core/models/caretaker.interface';
import { environments } from 'src/environments/environments';


@Injectable({
    providedIn: 'root'
})
export class CaretakerService {

    private baseUrl = environments.baseUrl

    constructor(private http: HttpClient){}

    getAllCaretakers(){
        return this.http.get<Caretaker[]>(`${ this.baseUrl }/caretakers`)
    }

    getCaretakerByName(name: string){
        return this.http.get<Caretaker[]>(`${ this.baseUrl }/caretakers?fullName=${name}`)
    }

    getCaretakersById(id: number){
        return this.http.get<Caretaker[]>(`${ this.baseUrl }/caretakers?id=${id}`)
    }


    filterSortAZCaretakers(){
        return this.http.get<Caretaker[]>(`${ this.baseUrl }/caretakers?_sort=fullName&_order=asc`)
    }

    filterSortZACaretakers(){
        return this.http.get<Caretaker[]>(`${ this.baseUrl }/caretakers?_sort=fullName&_order=desc`)
    }

    filterByHighestStars(){
        return this.http.get<Caretaker[]>(`${ this.baseUrl }/caretakers?_sort=calification&_order=desc`)
    }

    filterByLowestStars(){
        return this.http.get<Caretaker[]>(`${ this.baseUrl }/caretakers?_sort=calification&_order=asc`)
    }

    filterSortAgeCaretakers(age: number){
        return this.http.get<Caretaker[]>(`${ this.baseUrl }/caretakers?age=${age}`)
    }
}