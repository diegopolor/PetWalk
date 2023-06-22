import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from 'src/app/core/models/request.interface';

@Component({
  selector: 'request-list',
  templateUrl: './request-list.component.html'
})
export class RequestListComponent {
  @Input() requests$: Observable<Request[]> = new Observable()

}
