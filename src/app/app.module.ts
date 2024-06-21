import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WomenComponent } from './women/women.component';
import { MenComponent } from './men/men.component';
import { KidsComponent } from './kids/kids.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card'; 
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FulldetailesComponent } from './fulldetailes/fulldetailes.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { BeautyComponent } from './beauty/beauty.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { InvalidComponent } from './invalid/invalid.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAnalytics, provideAnalytics, ScreenTrackingService } from '@angular/fire/analytics';
import { getVertexAI, provideVertexAI } from '@angular/fire/vertexai-preview';
import { LoginComponent } from './login/login.component';
import { IncoorectrequestComponent } from './incoorectrequest/incoorectrequest.component';
import { AuthModule } from '@auth0/auth0-angular';
import { environment} from './environment';
@NgModule({
  declarations: [
   AppComponent,
    HomeComponent,
    WomenComponent,
    MenComponent,
    KidsComponent,
    FulldetailesComponent,
    BeautyComponent,
    CartPageComponent,
    ElectronicsComponent,
    RegisterComponent,
    InvalidComponent,
    LoginComponent,
    IncoorectrequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    NgbToastModule,
    FormsModule,
    AuthModule.forRoot({
      domain: 'dev-sji1h1iwvkwrbb25.us.auth0.com',
      clientId: 'CBD16iDKbIFvTGnRUjl77adSUl9SUgGZ',
    })
  ],
  providers: [
    provideFirebaseApp(() => initializeApp({"projectId":"shoppify-dc395","appId":"1:321008986980:web:5b2a2bd84832523e0ce871","storageBucket":"shoppify-dc395.appspot.com","apiKey":"AIzaSyAgowNN7234b--fzS4z5Je-Qj8MtNwN9UM","authDomain":"shoppify-dc395.firebaseapp.com","messagingSenderId":"321008986980","measurementId":"G-H68E7JTL26"})),
    provideAnalytics(() => getAnalytics()),
    ScreenTrackingService,
    provideVertexAI(() => getVertexAI())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
