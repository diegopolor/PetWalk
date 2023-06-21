import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Caretaker } from 'src/app/core/models/caretaker.interface';

@Component({
  selector: 'caretaker-card',
  templateUrl: './caretaker-card.component.html',
})
export class CaretakerCardComponent implements OnInit {
  @Input() caretaker!: Caretaker

  constructor(private router: Router ){}

  ngOnInit(): void {
    if(!this.caretaker) throw Error('Se debe de enviar el caretaker')
  }

  showProfile(id: string){
    this.router.navigate(['/caretakers', id])
  }
}
