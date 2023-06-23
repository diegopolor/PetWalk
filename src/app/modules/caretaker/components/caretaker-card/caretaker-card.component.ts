import { Component, Input, OnInit } from '@angular/core';
import { Caretaker } from 'src/app/core/models/caretaker.interface';

@Component({
  selector: 'caretaker-card',
  templateUrl: './caretaker-card.component.html',
})
export class CaretakerCardComponent implements OnInit {
  @Input() caretaker!: Caretaker

  ngOnInit(): void {
    if(!this.caretaker) throw Error('Se debe de enviar el caretaker')
  }


}
