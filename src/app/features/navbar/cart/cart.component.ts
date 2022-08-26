import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
public products:any=[];
public grandTotal!:number
  constructor( 
    private productService:ProductService
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(val=>{
      this.products=val;
      this.grandTotal=this.productService.getTotalPrice();
    })
  }

}
