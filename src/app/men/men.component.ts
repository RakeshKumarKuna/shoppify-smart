import { Component, OnInit } from '@angular/core';
import { ApidataService } from '../services/apidata.service';
import { ActivatedRoute } from '@angular/router';
import { CartItems } from '../services/Cart';
@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit {
  public products: any[] = [];
  public category: string | null = "";
  constructor(private per: ActivatedRoute,private men :ApidataService) {
    this.category = this.per.snapshot.paramMap.get('param2');
    
  }
  

  public addcart(item:any){
    CartItems.cartItems.push(item);
    CartItems.cartItems.length;
    alert(CartItems.cartItems.length);
   }

  ngOnInit(): void {
    this.men.getwomen(this.category).subscribe(data =>this.products=data);
   
  }

}
