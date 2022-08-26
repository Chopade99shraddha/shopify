import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
totalItem:number=0
searchTerm:string=''
  constructor(
    private productService:ProductService
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(val=>{this.totalItem=val.length;})
  }
  


}
