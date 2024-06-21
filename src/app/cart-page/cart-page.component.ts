import { Component } from '@angular/core';
import { CartItems } from '../services/Cart';
@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {

public products:any[] = CartItems.cartItems;
public addcart(item:any){
  CartItems.cartItems.push(item);
 }
 public len=this.products.length==0?true:false;
}
