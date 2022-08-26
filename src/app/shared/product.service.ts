import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { menInterface, womenInterface } from './men';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
public cartItemList:any=[]
public productList=new BehaviorSubject<any>([])

  constructor(
    private http:HttpClient
  ) { }
  cartValue=0
  cartValue$=new Subject<number>()
  addToCart(product:any)
{
this.cartItemList.push(product);
this.productList.next(this.cartItemList);
this.getTotalPrice();
console.log(this.cartItemList);

}
getTotalPrice():number
{
  let grandTotal=0;
  this.cartItemList.map((a:any)=>{
  grandTotal+=a.total;})
  return grandTotal
}
getCartValue()
{
  return this.cartValue$
}
removeCartItem(product:any)
{
this.cartItemList.map((a:any,index:any)=>{
  if(product.id===a.id){
    this.cartItemList.splice(index,1);
  }
})
}

getMenProduct()
{
  return this.http.get<menInterface[]>("http://localhost:4200/assets/products.json")
}
getWomenProduct()
{
  return this.http.get<womenInterface[]>("http://localhost:4200/assets/women.json")
}


getProducts()
{
 return  this.productList.asObservable();
}
setProduct(
  product:any)
{
this.cartItemList.push(...product);
this.productList.next(product);
}

/*getProductByLoginId(id:string)
{
  return this.http.get<womenInterface>(`http://localhost:4200/assets/women.json/${id}`)
}*/









}
