import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {  womenInterface } from 'src/app/shared/men';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-womendetails',
  templateUrl: './womendetails.component.html',
  styleUrls: ['./womendetails.component.scss']
})
export class WomendetailsComponent implements OnInit {

  constructor(
    private active:ActivatedRoute,
    private productService:ProductService
  ) { }
product$!:Observable<womenInterface>
  ngOnInit(): void {
    const Id=this.active.snapshot.paramMap.get("id")!
    console.log(Id);
  //  this.productService.getProductByLoginId(Id).subscribe(val=>console.log(val)
   // )
   // this.product$=this.productService.getProductByLoginId(Id)
  }
 // addTocart(item:any)
 // {
   // this.productService.addToCart(item);
  //}

}
