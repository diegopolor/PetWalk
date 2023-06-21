import { Component, Input, OnInit } from '@angular/core';
import { Caretaker } from 'src/app/core/models/caretaker.interface';

@Component({
  selector: 'caretaker-profile-info',
  templateUrl: './caretaker-profile-info.component.html',
  styles: [
  ]
})
export class CaretakerProfileInfoComponent implements OnInit {
  @Input() caretaker!: Caretaker

  ngOnInit(): void {
    if(!this.caretaker) throw Error('Se debe de enviar el caretaker para mostrar la información.')
  }

}
