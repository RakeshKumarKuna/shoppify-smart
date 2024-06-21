import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KidsComponent } from './kids/kids.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { FulldetailesComponent } from './fulldetailes/fulldetailes.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { BeautyComponent } from './beauty/beauty.component';
//import { LoginComponent } from '../../../shopping/src/app/login/login.component';
import { registerLocaleData } from '@angular/common';
//import { RegisterComponent } from './register/register.component';
//import { InvalidComponent } from './invalid/invalid.component';
import { MenGuard } from './Guards/men.guard';
import { IncoorectrequestComponent } from './incoorectrequest/incoorectrequest.component';
import { RegisterComponent } from './register/register.component';
import { InvalidComponent } from './invalid/invalid.component';
import { LoginComponent } from './login/login.component';
//import { IncoorectrequestComponent } from './incoorectrequest/incoorectrequest.component';

const routes: Routes = [
{path:"home",component: HomeComponent,canActivate:[MenGuard]},
{path:'kids/:param3',component:KidsComponent,canActivate:[MenGuard]},
{path:'men/:param2',component:MenComponent,canActivate:[MenGuard]},
{path:'women/:param1',component:WomenComponent,canActivate:[MenGuard]},
{path:'fulldetailes/:id',component:FulldetailesComponent,canActivate:[MenGuard]},
{path:'cartitems',component:CartPageComponent,canActivate:[MenGuard]},
{path:'Ele/:param4',component:ElectronicsComponent,canActivate:[MenGuard]},
{path:'beauty',component:BeautyComponent,canActivate:[MenGuard]},
{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'invalid',component:InvalidComponent},
{path:'',component:LoginComponent,canActivate:[MenGuard]},
{path:'**',component:IncoorectrequestComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
