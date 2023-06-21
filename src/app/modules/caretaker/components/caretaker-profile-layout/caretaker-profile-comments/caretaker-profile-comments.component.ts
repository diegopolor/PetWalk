import { Component, Input } from '@angular/core';
import { Caretaker } from 'src/app/core/models/caretaker.interface';

@Component({
  selector: 'caretaker-profile-comments',
  templateUrl: './caretaker-profile-comments.component.html',
})
export class CaretakerProfileCommentsComponent {
  @Input() caretaker!: Caretaker

  ngOnInit(): void {
    if(!this.caretaker) throw Error('Se debe de enviar el caretaker para mostrar la información.')
  }
}
