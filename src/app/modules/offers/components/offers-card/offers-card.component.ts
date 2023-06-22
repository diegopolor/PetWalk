import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offers } from 'src/app/core/models/offers.interface';

@Component({
  selector: 'offers-card',
  templateUrl: './offers-card.component.html',
  styles: [
  ]
})
export class OffersCardComponent implements OnInit {
  @Input() offer!: Offers
  
  constructor(private router: Router){}

  ngOnInit(): void {
    if(!this.offer) throw Error('Se debe de enviar offer para mostrar la información')
  }

  showOffer(id: string){
    this.router.navigate(['/offers', id])
  }
  
}
