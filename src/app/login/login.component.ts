import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';
import { ApidataService } from '../services/apidata.service';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  public counter:boolean=true;
  ngOnInit(): void {
    this.api.getuserdetailes().subscribe(data => this.userdetailes = data);
  }
  public userdetailes: any[] = [];
  constructor(private api: ApidataService, private route: Router,private cookie: CookieService,private auth:AuthService) {
  }
  login() {
    this.auth.loginWithRedirect();
  }
  checklogin(logindata: any) {
   /*  alert(JSON.stringify(this.userdetailes))
    for (let item of this.userdetailes) {
      if (item.UserName === logindata.value.UserName) {
        this.cookie.set('UserName',logindata.value.UserName);
          this.route.navigate(['/home']);
          this.counter=false;
          break;
      }
      else {
      }
      if(this.counter){
        this.route.navigate(['/invalid']);
      }
    }
 */
  }

}