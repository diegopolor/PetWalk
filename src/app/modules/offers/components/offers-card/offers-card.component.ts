import { Component, Input, OnInit } from '@angular/core';
import { Offers } from 'src/app/core/models/offers.interface';

@Component({
  selector: 'offers-card',
  templateUrl: './offers-card.component.html',
  styles: [
  ]
})
export class OffersCardComponent implements OnInit {
  @Input() offer!: Offers
  
  ngOnInit(): void {
    if(!this.offer) throw Error('Se debe de enviar offer para mostrar la información')
  }
  
}
