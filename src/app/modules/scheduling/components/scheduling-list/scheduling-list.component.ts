import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Scheduling } from 'src/app/core/models/scheduling.interface';

@Component({
  selector: 'scheduling-list',
  templateUrl: './scheduling-list.component.html',
  styles: [
  ]
})
export class SchedulingListComponent {
  @Input() schedulings$: Observable<Scheduling[]> = new Observable() 
}
