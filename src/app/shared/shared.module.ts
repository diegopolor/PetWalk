import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { BtnGhostComponent } from './components/btn-ghost/btn-ghost.component';
import { StarBoxComponent } from './components/star-box/star-box.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    BtnGhostComponent,
    StarBoxComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ 
    HeaderComponent, 
    BtnGhostComponent,
    StarBoxComponent
  ]
})
export class SharedModule { }
