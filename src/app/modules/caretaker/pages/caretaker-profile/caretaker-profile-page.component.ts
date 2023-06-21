import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Caretaker } from 'src/app/core/models/caretaker.interface';
import { CaretakerService } from '../../services/caretaker.service';

@Component({
  selector: 'app-caretaker-profile',
  templateUrl: './caretaker-profile-page.component.html',
})
export class CaretakerProfilePageComponent implements OnInit {

  caretaker!: Caretaker 

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private caretakerService: CaretakerService
  ){}

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(({ id }) =>  
        this.caretakerService.getCaretakersById(id)
      )
    ).subscribe(( data )=> {
        this.caretaker = data[0]
        
        if(data.length < 1){
          alert('No se encontró el perfil solicitado')
          this.router.navigate(['/caretakers'])
        }
    })
  }
}
