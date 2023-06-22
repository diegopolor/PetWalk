import { Component, Input, OnInit } from '@angular/core';
import { Offers } from 'src/app/core/models/offers.interface';

@Component({
  selector: 'offers-yours-card',
  templateUrl: './offers-yours-card.component.html',
  styles: [
  ]
})
export class OffersYoursCardComponent implements OnInit{
  @Input() offer! : Offers

  ngOnInit(): void {
    if(!this.offer) throw Error('No se pasó la propiedad offer')
  }

}
