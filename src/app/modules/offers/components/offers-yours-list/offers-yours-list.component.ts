import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Offers } from 'src/app/core/models/offers.interface';

@Component({
  selector: 'offers-yours-list',
  templateUrl: './offers-yours-list.component.html',
  styles: [
  ]
})
export class OffersYoursListComponent {
  @Input() offers$ : Observable<Offers[]> = new Observable()
  
}
