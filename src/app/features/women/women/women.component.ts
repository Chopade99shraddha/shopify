import { Component, OnInit } from '@angular/core';
import { menInterface, womenInterface } from 'src/app/shared/men';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.scss']
})
export class WomenComponent implements OnInit {
//public products:any;
  constructor( private productService:ProductService
    ) { }
    searchTerm:string=''
 filteredString:string=""
 searchKey:string=""
products:womenInterface[]=[]
//productsForFilter:menInterface[]=[]
  ngOnInit(): void {
    this.productService.getWomenProduct().subscribe(val=>{
      this.products=val;
      this.products.forEach((a:any )=> {
        Object.assign(a,{quantity:1,total:a.price})
        
      });
    })
   
    }
  
  addTocart(item:any)
  {
    this.productService.addToCart(item);
  }
  start=0
  end=6
  items_per_page=6
  changePage(PAGE_NO:number)
  {
    this.start=(PAGE_NO-1)*this.items_per_page
    this.end=PAGE_NO*this.items_per_page
  }
DataFromChild(data:number)
{
  console.log(data);
  
}
}



