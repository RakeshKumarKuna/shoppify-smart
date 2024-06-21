import { Component, OnInit } from '@angular/core';
import { CartItems } from '../services/Cart';
import { ActivatedRoute } from '@angular/router';
import { ApidataService } from '../services/apidata.service';
@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent implements OnInit {
  public products: any[] = [];
  public category: string | null = "";
  constructor(private per: ActivatedRoute,private jew :ApidataService) {
    this.category = this.per.snapshot.paramMap.get('param3');
  }
  ngOnInit(): void {
    this.jew.getwomen(this.category).subscribe(data =>this.products=data);
  }
 
  public addcart(item:any){
    CartItems.cartItems.push(item);
    alert(CartItems.cartItems.length);
   }
}
