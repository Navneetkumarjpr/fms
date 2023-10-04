import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { WelcomeuserComponent } from './welcomeuser/welcomeuser.component';

const routes: Routes = [
  // {path: '', redirectTo: 'booking',pathMatch: 'full'},
  // {path: 'bookings', component: BookingListComponent},
  // {path: 'addBooking', component: CreateBookingComponent},
  // {path: 'updateBooking/:id', component: UpdateBookingComponent},
  // {path: 'bookingDetails/:id', component: BookingDetailsComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  // {path: 'logout', component: LogoutComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'welcomeuser', component: WelcomeuserComponent },
  // {path: 'addAirport', component: CreateAirportComponent },
  // {path: 'update/:airportCode', component: UpdateAirportComponent },
  // {path: 'details/:airportCode', component: AirportDetailsComponent },
  // {path: 'flights', component: FlightListComponent },
  // {path: 'addFlight', component: CreateFlightComponent },
  // {path: 'updateFlight/:flightNo', component: UpdateFlightComponent },
  // {path: 'flightDetails/:flightNo', component: FlightDetailsComponent },
  // {path: 'scheduledFlight/add', component:AddScheduledFlightComponent},
  // {path: 'scheduledFlight/show', component:ShowScheduledFlightsComponent},
  // {path: 'scheduledFlight/search', component:SearchScheduledFlightComponent},
  {path: 'adminlogin', component:AdminloginComponent},
  // {path: 'scheduledFlight/modify', component: ModifyScheduledFlightComponent},
  // {path: 'addUser', component: CreateUserComponent},
  // {path: 'updateUser/:id', component: UpdateUserComponent},
  // {path: 'userDetails/:id', component: UserDetailsComponent},
  // {path: 'users', component: ListUserComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }