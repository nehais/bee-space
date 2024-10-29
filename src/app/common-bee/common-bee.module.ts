import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    LogoComponent,
    NavMenuComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    CardComponent
  ]
})
export class CommonBeeModule { }
