import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Offers } from 'src/app/core/models/offers.interface';
import { OfferService } from '../../services/offer.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'offers-page',
  templateUrl: './offers-page.component.html',
  styles: [
  ]
})
export class OffersPageComponent {
  offer!: Offers 

  textoSeparado = ''

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private offerService: OfferService,
  ){}

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(({ id }) =>  
        this.offerService.filterById(id)
      )
    ).subscribe(( data )=> {
        this.offer = data[0]
        
        if(data.length < 1){
          alert('No se encontró el perfil solicitado')
          this.router.navigate(['/offers'])
        }
    })
  }

}
