import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { profileImgPipe } from './pipes/profileImg.pipe';
import { TransformDatePipe }      from './pipes/transformDate.pipe';

import { 
  HeaderComponent,       
  NavbarComponent,        
  BtnGhostComponent,     
  StarBoxComponent,       
  SearchBoxComponent,    
  BtnOutlineComponent,    
  CommentCardComponent,   
  CommentInputComponent, 
  BtnSortComponent, 
  InptNumberComponent, 
  BtnPrimaryComponent, 
  InptCustomComponent, 
  InptTextAreaComponent, 
  BtnRefreshComponent, 
  InptLightComponent, 
  BtnVerifyComponent,
  HeaderPublicComponent, 
  NavbarMobileComponent,
  BtnLogoutComponent 
} from './components'


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
    InptLightComponent,
    BtnVerifyComponent,
    HeaderPublicComponent,
    NavbarMobileComponent,
    BtnLogoutComponent,
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
    InptLightComponent,
    BtnVerifyComponent,
    HeaderPublicComponent
  ]
})
export class SharedModule { }
