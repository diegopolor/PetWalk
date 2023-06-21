import { Component, Input } from '@angular/core';
import { Caretaker } from 'src/app/core/models/caretaker.interface';

@Component({
  selector: 'caretaker-profile-hourly',
  templateUrl: './caretaker-profile-hourly.component.html',
})
export class CaretakerProfileHourlyComponent {
  @Input() caretaker!: Caretaker

  ngOnInit(): void {
    if(!this.caretaker) throw Error('Se debe de enviar el caretaker para mostrar la información.')
  }
}
