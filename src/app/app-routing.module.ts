import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { WelcomeuserComponent } from './welcomeuser/welcomeuser.component';
import { FlightavailableComponent } from './flightavailable/flightavailable.component';
import { AddflightComponent } from './addflight/addflight.component';
import { DisplayticketComponent } from './displayticket/displayticket.component';
import { TicketComponent } from './ticket/ticket.component';
import { UpdateflightComponent } from './updateflight/updateflight.component';
import { AuthGuard } from './auth.guard';
import { FlightBookingComponent } from './flightavailable/flight-booking/flight-booking.component';
import { SearchflightComponent } from './searchflight/searchflight.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
// {path: '', redirectTo: 'booking',pathMatch: 'full'},
  // {path: 'bookings', component: BookingListComponent},
  // {path: 'addBooking', component: CreateBookingComponent},
  // {path: 'updateBooking/:id', component: UpdateBookingComponent},
  // {path: 'bookingDetails/:id', component: BookingDetailsComponent},
  // {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '', component: HomeComponent},
  {path: 'dashboard/search', component: SearchflightComponent,canActivate:[AuthGuard]},
  {path: 'dashboard', component: DashboardComponent,canActivate:[AuthGuard]},
  {path: 'displayticket', component: DisplayticketComponent,canActivate:[AuthGuard]},
  {path: 'confirmticket', component: TicketComponent,canActivate:[AuthGuard]},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  // {path: 'logout', component: LogoutComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'flightbooking/:id', component: FlightBookingComponent},
  {path: 'welcomeuser', component: WelcomeuserComponent, canActivate:[AuthGuard]},
  // {path: 'addAirport', component: CreateAirportComponent },
  // {path: 'update/:airportCode', component: UpdateAirportComponent },
  // {path: 'details/:airportCode', component: AirportDetailsComponent },
  {path: 'flights', component:FlightavailableComponent,canActivate:[AuthGuard]},
  {path: 'dashboard/addFlight', component: AddflightComponent, canActivate:[AuthGuard] },
  // {path: 'viewflight/:flightNo', component: SearchflightComponent },
  {path: 'updateFlight/:id', component: UpdateflightComponent },
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
