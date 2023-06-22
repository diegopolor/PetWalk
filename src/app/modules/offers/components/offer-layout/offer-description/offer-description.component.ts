import { Component, Input, OnInit } from '@angular/core';
import { Offers } from 'src/app/core/models/offers.interface';

@Component({
  selector: 'offer-description',
  templateUrl: './offer-description.component.html',
})
export class OfferDescriptionComponent implements OnInit {
  @Input() offer!: Offers

  ngOnInit(): void {
    if(!this.offer) throw Error('No se pasó la propierdad "offer"')
  }
}
