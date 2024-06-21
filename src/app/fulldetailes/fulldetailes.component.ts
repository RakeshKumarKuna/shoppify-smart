import { Component, OnInit } from '@angular/core';
import { ApidataService } from '../services/apidata.service';
import { ActivatedRoute } from '@angular/router';
import { CartItems } from '../services/Cart';
@Component({
  selector: 'app-fulldetailes',
  templateUrl: './fulldetailes.component.html',
  styleUrls: ['./fulldetailes.component.css']
})
export class FulldetailesComponent implements OnInit {
  public id: string | null = "";
  public product: any = {};
  constructor(private ser: ApidataService, private per: ActivatedRoute) {
    this.id = this.per.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.ser.productdetailes(this.id).subscribe(data => {
      this.product = data;
    });
  

  }
}
