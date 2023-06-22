import { Component, Input, OnInit } from '@angular/core';
import { Scheduling } from '../../../../core/models/scheduling.interface';

@Component({
  selector: 'scheduling-card',
  templateUrl: './scheduling-card.component.html',
  styles: [
  ]
})
export class SchedulingCardComponent  implements OnInit{
  @Input() scheduling! : Scheduling

  ngOnInit(): void {
    if(!this.scheduling) throw Error('No se pasó la propiedad "scheduling"')
  }
}
