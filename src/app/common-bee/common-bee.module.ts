import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    LogoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class CommonBeeModule { }
