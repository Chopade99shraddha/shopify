import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FeaturesModule } from './features/features.module';
import { HomeComponent } from './features/home/home/home.component';
import { MenComponent } from './features/men/men/men.component';
import { CartComponent } from './features/navbar/cart/cart.component';
import { WomenComponent } from './features/women/women/women.component';
import { WomendetailsComponent } from './features/women/womendetails/womendetails.component';
import { RoutingModule } from './routing/routing.module';
import { CustomPipe } from './shared/custom.pipe';
import { SharedModule } from './shared/shared.module';
const routes:Routes=[
  {path:"home",component:HomeComponent},
  {path:"Men",component:MenComponent},
  {path:"cart",component:CartComponent},
  {path:"women",component:WomenComponent},
  {path:"",redirectTo:'/home',pathMatch:'full'},
  {
    path:"women/:id",component:WomendetailsComponent
  }
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,FeaturesModule,SharedModule,RoutingModule,CommonModule,
    RouterModule.forRoot(routes),FormsModule
  ],
  providers: [CustomPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
