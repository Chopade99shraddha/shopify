import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenComponent } from './men/men.component';
import { MendetailsComponent } from './mendetails/mendetails.component';
import { StarComponent } from './star/star.component';



@NgModule({
  declarations: [
    MenComponent,
    MendetailsComponent,
    StarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MenModule { }
