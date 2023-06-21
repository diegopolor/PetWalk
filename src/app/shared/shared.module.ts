import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { caretakerProfileImg } from './pipes/caretakerProfileImg.pipe';

import { HeaderComponent }      from './components/header/header.component';
import { NavbarComponent }      from './components/navbar/navbar.component';
import { BtnGhostComponent }    from './components/btn-ghost/btn-ghost.component';
import { StarBoxComponent }     from './components/star-box/star-box.component';
import { SearchBoxComponent }   from './components/search-box/search-box.component';
import { BtnOutlineComponent }  from './components/btn-back/btn-outline.component';
import { CommentCardComponent } from './components/comment/comment-card/comment-card.component';
import { CommentInputComponent }from './components/comment/comment-input/comment-input.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    BtnGhostComponent,
    StarBoxComponent,
    SearchBoxComponent,
    BtnOutlineComponent,
    CommentCardComponent,
    CommentInputComponent,

    caretakerProfileImg,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ 
    HeaderComponent, 
    BtnGhostComponent,
    StarBoxComponent,
    SearchBoxComponent,
    BtnOutlineComponent,
    CommentCardComponent,
    CommentInputComponent,

    caretakerProfileImg
  ]
})
export class SharedModule { }
