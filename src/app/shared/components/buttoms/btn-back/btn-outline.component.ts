import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'btn-back',
  templateUrl: './btn-outline.component.html',
})
export class BtnOutlineComponent implements OnInit{
  @Input() route!: string 

  constructor(private router: Router){}

  ngOnInit(): void {
    if(!this.route)throw Error('Se debe de enviar la "ruta" donde se va a redirigir')
  }

  onBack(){
    this.router.navigate([this.route])
  }
}
