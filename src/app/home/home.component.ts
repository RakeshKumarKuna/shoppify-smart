import { Component, OnInit } from '@angular/core';
import { ApidataService } from '../services/apidata.service';
import { CartItems } from '../services/Cart';
import { count } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public static cartlen: number = 0;
  public products: any[] = [];
  constructor(private ser: ApidataService) {
  }
  public addcart(item: any) {
    CartItems.cartItems.push(item);
    HomeComponent.cartlen = CartItems.cartItems.length;
    alert(HomeComponent.cartlen);
  }
  ngOnInit(): void {
    this.ser.getdata().subscribe(data => this.products = data);
  }
    counter:boolean=false;
    index:number=-1;
    colorchange(i:number){
      this.index=i;
    this.counter=this.counter==false ? true : false;
  }

}
