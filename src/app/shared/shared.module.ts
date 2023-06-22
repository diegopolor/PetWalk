import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { profileImgPipe } from './pipes/profileImg.pipe';
import { TransformDatePipe }      from './pipes/transformDate.pipe';

import { HeaderComponent }        from './components/header/header.component';
import { NavbarComponent }        from './components/navbar/navbar.component';
import { BtnGhostComponent }      from './components/buttoms/btn-ghost/btn-ghost.component';
import { StarBoxComponent }       from './components/star-box/star-box.component';
import { SearchBoxComponent }     from './components/inputs/search-box/search-box.component';
import { BtnOutlineComponent }    from './components/buttoms/btn-back/btn-outline.component';
import { CommentCardComponent }   from './components/comment/comment-card/comment-card.component';
import { CommentInputComponent }  from './components/comment/comment-input/comment-input.component';
import { BtnSortComponent }       from './components/buttoms/btn-sort/btn-sort.component';
import { InptNumberComponent }    from './components/inputs/inpt-number/inpt-number.component';
import { BtnPrimaryComponent }    from './components/buttoms/btn-primary/btn-primary.component';
import { InptCustomComponent } from './components/inputs/inpt-custom/inpt-custom.component';
import { InptTextAreaComponent } from './components/inputs/inpt-text-area/inpt-text-area.component';
import { BtnRefreshComponent } from './components/buttoms/btn-refresh/btn-refresh.component';


@NgModule({
  declarations: [
    profileImgPipe,
    TransformDatePipe,

    HeaderComponent,
    NavbarComponent,
    BtnGhostComponent,
    StarBoxComponent,
    SearchBoxComponent,
    BtnOutlineComponent,
    BtnSortComponent,
    BtnPrimaryComponent,
    CommentCardComponent,
    CommentInputComponent,
    InptNumberComponent,
    InptTextAreaComponent,
    InptCustomComponent,
    BtnRefreshComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ 
    profileImgPipe,
    TransformDatePipe,

    HeaderComponent, 
    BtnGhostComponent,
    StarBoxComponent,
    SearchBoxComponent,
    BtnOutlineComponent,
    CommentCardComponent,
    CommentInputComponent,
    BtnSortComponent,
    BtnPrimaryComponent,
    InptNumberComponent,
    InptCustomComponent,
    InptTextAreaComponent,
    BtnRefreshComponent,
  ]
})
export class SharedModule { }
