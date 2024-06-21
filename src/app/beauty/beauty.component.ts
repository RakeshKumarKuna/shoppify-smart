import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItems } from '../services/Cart';
import { ApidataService } from '../services/apidata.service';

@Component({
  selector: 'app-beauty',
  templateUrl: './beauty.component.html',
  styleUrls: ['./beauty.component.css']
})
export class BeautyComponent {

  public products: any = {};
  public category: string | null = "";
  constructor(private per: ActivatedRoute,private beauty:ApidataService) {
  }

  public addcart(item:any){
    CartItems.cartItems.push(item);
    CartItems.cartItems.length;
    alert(CartItems.cartItems.length);
   }

  ngOnInit(): void {
   this.beauty.getBeautyProducts().subscribe(data=> this.products=data);
  }

}
