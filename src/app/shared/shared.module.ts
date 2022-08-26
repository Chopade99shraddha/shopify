import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { CustomPipe } from './custom.pipe'


@NgModule({
  declarations: [
    CustomPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class SharedModule { }
