import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsModule } from './products/products.module';
import { NavbarModule } from './navbar/navbar.module';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { SliderComponent } from './navbar/slider/slider.component';
import { HomeModule } from './home/home.module';
import { MenModule } from './men/men.module';
import { WomenModule } from './women/women.module';
import { FooterModule } from './footer/footer.module';
import { FooterComponent } from './footer/footer/footer.component';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,ProductsModule,NavbarModule,HomeModule,MenModule,WomenModule,FooterModule
  ],
  exports:[NavbarComponent,FooterComponent]
})
export class FeaturesModule { }
