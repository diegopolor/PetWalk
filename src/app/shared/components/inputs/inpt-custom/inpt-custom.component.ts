import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'inpt-custom',
  templateUrl: './inpt-custom.component.html',
  styles: [
  ]
})
export class InptCustomComponent {
  @Input() disabled= false
  @Input() placeholder = ''
  @Input() type = ''
  @Output() onValue = new EventEmitter<string>()

  @ViewChild('Input') inputDate! : ElementRef<HTMLInputElement> 

  valueEmmiter(){
    this.onValue.emit(this.inputDate.nativeElement.value)
}
}
