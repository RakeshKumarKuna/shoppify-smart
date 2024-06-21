import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApidataService } from '../services/apidata.service';
import { CartItems } from '../services/Cart';
@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent implements OnInit {
  public products: any[] = [];
  public category: string | null = "";
  constructor(private per: ActivatedRoute,private women :ApidataService) {
    this.category = this.per.snapshot.paramMap.get('param1');
  }

  public addcart(item:any){
    CartItems.cartItems.push(item);
    CartItems.cartItems.length;
    alert(CartItems.cartItems.length)
   }

  ngOnInit(): void {
    this.women.getwomen(this.category).subscribe(data =>this.products=data);
   
  }

}
