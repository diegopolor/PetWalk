import { Component, Input, OnInit } from '@angular/core';
import { Offers } from 'src/app/core/models/offers.interface';

@Component({
  selector: 'offer-info',
  templateUrl: './offer-info.component.html',
})
export class OfferInfoComponent implements  OnInit  {
  @Input() offer!: Offers

  ngOnInit(): void {
    if(!this.offer) throw Error('No se pasó la propierdad "offer"')
  }
}
