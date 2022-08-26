import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WomenComponent } from './women/women.component';
import { WomendetailsComponent } from './womendetails/womendetails.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { StarComponent } from './star/star.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    WomenComponent,
    WomendetailsComponent,
    FilterPipe,
    StarComponent
  
  ],
  imports:[ 
    CommonModule,FormsModule,RouterModule
  ]
})
export class WomenModule { }
