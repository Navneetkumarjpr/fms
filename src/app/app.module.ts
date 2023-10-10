import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AddflightComponent } from './addflight/addflight.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ServiceService } from './service/service.service';
import { WelcomeuserComponent } from './welcomeuser/welcomeuser.component';
import { FlightavailableComponent } from './flightavailable/flightavailable.component';
import { DisplayticketComponent } from './displayticket/displayticket.component';
import { RemoveticketComponent } from './removeticket/removeticket.component';
import { TicketComponent } from './ticket/ticket.component';
import { UpdateflightComponent } from './updateflight/updateflight.component';
import { SearchflightComponent } from './searchflight/searchflight.component';
import { ButtonModule } from 'smart-webcomponents-angular/button';
import { InputModule } from 'smart-webcomponents-angular/input';
import { CheckPasswordDirective } from './password.directive';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FlightBookingComponent } from './flightavailable/flight-booking/flight-booking.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    AdminloginComponent,
    WelcomeuserComponent,
    FlightavailableComponent,
    AddflightComponent,
    DisplayticketComponent,
    RemoveticketComponent,
    TicketComponent,
    UpdateflightComponent,
    SearchflightComponent,
    CheckPasswordDirective,
    FlightBookingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule,
    InputModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
