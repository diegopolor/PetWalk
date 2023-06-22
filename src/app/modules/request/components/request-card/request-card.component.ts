import { Component, Input, OnInit } from '@angular/core';
import { Request } from 'src/app/core/models/request.interface';

@Component({
  selector: 'request-card',
  templateUrl: './request-card.component.html',
  styles: [
  ]
})
export class RequestCardComponent implements OnInit {
  @Input() request!: Request

  ngOnInit(): void {
    if(!this.request) throw Error('No se pasó la propiedad request')
  }
}
