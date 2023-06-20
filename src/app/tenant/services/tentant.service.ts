import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Caretaker } from 'src/app/core/models/caretaker.interface';


@Injectable({
    providedIn: 'root'
})
export class TenantService {

    constructor(private http: HttpClient){}

    getAllCaretakers(){
        return this.http.get<Caretaker[]>('http://localhost:3000/caretakers')
    }

    filterSortAZCaretakers(){
        return this.http.get<Caretaker[]>('http://localhost:3000/caretakers?_sort=fullName&_order=asc')
    }

    filterSortZACaretakers(){
        return this.http.get<Caretaker[]>('http://localhost:3000/caretakers?_sort=fullName&_order=desc')
    }

    filterByHighestStars(){
        return this.http.get<Caretaker[]>('http://localhost:3000/caretakers?_sort=calification&_order=desc')
    }

    filterByLowestStars(){
        return this.http.get<Caretaker[]>('http://localhost:3000/caretakers?_sort=calification&_order=asc')
    }

    filterSortAgeCaretakers(age: number){
        return this.http.get<Caretaker[]>(`http://localhost:3000/caretakers?age=${age}`)
    }


   
    


}