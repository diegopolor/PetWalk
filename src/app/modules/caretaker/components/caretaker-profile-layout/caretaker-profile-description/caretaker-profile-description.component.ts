import { Component, Input } from '@angular/core';
import { Caretaker } from 'src/app/core/models/caretaker.interface';

@Component({
  selector: 'caretaker-profile-description',
  templateUrl: './caretaker-profile-description.component.html',
})
export class CaretakerProfileDescriptionComponent {
  @Input() caretaker!: Caretaker

  ngOnInit(): void {
    if(!this.caretaker) throw Error('Se debe de enviar el caretaker para mostrar la información.')
  }

}
