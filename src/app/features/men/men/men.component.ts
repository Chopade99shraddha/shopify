import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { menInterface } from 'src/app/shared/men';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.scss']
})
export class MenComponent implements OnInit {
//public products:any;
  constructor(
    private productService:ProductService

  ) { }
products:menInterface[]=[]
  ngOnInit(): void {
    this.productService.getMenProduct().subscribe(val=>{this.products=val;
    this.products.forEach((a:any) => {
      Object.assign(a,{quantity:1,total:a.price})
      
    });}

    )

  }
  addTocart(item:any)
  {
    this.productService.addToCart(item)
  }
  DataFromChild(data:number)
{
  console.log(data);
  
}


  start=0
  end=6
  items_per_page=6
  changePage(PAGE_NO:number)
  {
    this.start=(PAGE_NO-1)*this.items_per_page
    this.end=PAGE_NO*this.items_per_page
  }
  }
  



