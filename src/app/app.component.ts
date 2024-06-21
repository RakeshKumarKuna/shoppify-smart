import { Component, OnInit } from '@angular/core';
import { CartItems } from './services/Cart';
import { HomeComponent } from './home/home.component';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private cookie :CookieService,private rout:Router){}
 public len=HomeComponent.cartlen;

 signing(event:any){
  this.cookie.delete('UserName');
  this.rout.navigate(['login']);
 }
  ngOnInit(): void {
    
  }
  title = 'amazon';
  
}
