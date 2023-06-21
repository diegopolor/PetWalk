import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/core/models/comment.interface';

@Component({
  selector: 'comment-card',
  templateUrl: './comment-card.component.html',
  styles: [
  ]
})
export class CommentCardComponent implements OnInit {
  @Input() comment!: Comment

  ngOnInit(): void {
    if(!this.comment) throw Error('Se debe de enviar el objeto del comentario para mostrarlo')
  }
}
