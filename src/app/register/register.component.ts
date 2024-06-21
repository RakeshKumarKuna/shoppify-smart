import { Component } from '@angular/core';
import { ApidataService } from '../services/apidata.service';
import { UUID } from 'mongodb';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private api:ApidataService,private router:Router){
  }
register(data:any){
alert(JSON.stringify(data));
this.api.submitdata(data).subscribe();
this.router.navigate(['/login']);
}
}
