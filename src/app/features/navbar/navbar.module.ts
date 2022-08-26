import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';
import { LogInComponent } from './log-in/log-in.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SliderComponent,
    CartComponent,
    LogInComponent
  ],
  imports: [
    CommonModule,RouterModule,FormsModule
  ],
  exports:[NavbarComponent,SliderComponent]
  
})
export class NavbarModule { }
