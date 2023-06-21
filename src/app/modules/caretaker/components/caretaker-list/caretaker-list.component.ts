import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Caretaker } from 'src/app/core/models/caretaker.interface';

@Component({
  selector: 'caretaker-list',
  templateUrl: './caretaker-list.component.html',
  styles: [
  ]
})
export class CaretakerListComponent implements OnInit{
  @Input() caretakerList$!: Observable<Caretaker[]>

  ngOnInit(): void {
    if(!this.caretakerList$) throw Error('Se debe pasar la lista de caretakers')
  }

}
