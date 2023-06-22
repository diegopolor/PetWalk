import { Component, Input, OnInit } from '@angular/core';
import { Offers } from 'src/app/core/models/offers.interface';

@Component({
  selector: 'offer-details',
  templateUrl: './offer-details.component.html',
})
export class OfferDetailsComponent implements OnInit {
  @Input() offer!: Offers

  ngOnInit(): void {
    if(!this.offer) throw Error('No se pasó la propierdad "offer"')
  }
}
