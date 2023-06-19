import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'star-box',
  templateUrl: './star-box.component.html',
  styles: [
  ]
})
export class StarBoxComponent implements OnInit{
  @Input() count!: number
  private maxStars = 5
  public activeStars: number[] = []
  public disableStars: number[] = []


  ngOnInit(): void {
    if(!this.count) throw Error('No se envió la cantidad de estrellas.')
    this.activeStars = Array.from({ length: this.count })
    this.disableStars = Array.from({ length: ( this.maxStars - this.count) })
  }
}
