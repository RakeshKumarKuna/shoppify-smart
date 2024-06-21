import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItems } from '../services/Cart';
import { ApidataService } from '../services/apidata.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {

  public products: any[] = [];
  public category: string | null = "";
  constructor(private per: ActivatedRoute,private men :ApidataService) {
    this.category = this.per.snapshot.paramMap.get('param4');
  }
  ngOnInit(): void {
    this.men.getwomen(this.category).subscribe(data =>this.products=data);
  }

  public addcart(item:any){
    CartItems.cartItems.push(item);
    alert(CartItems.cartItems.length);
   }
}
