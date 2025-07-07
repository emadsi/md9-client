import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AdminService } from './services/admin/admin.service';
import { ReservationService } from './services/reservation/reservation.service';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { TimeslotComponent } from './components/timeslot/timeslot.component';
import { BlockTimeslotsComponent } from './components/block-timeslots/block-timeslots.component';
import { AddTimeslotsComponent } from './components/add-timeslots/add-timeslots.component';
import { ConfirmPaymentsComponent } from './components/confirm-payments/confirm-payments.component';
import { BlockDialogComponent } from './components/block-dialog/block-dialog.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { HomePageModule } from './pages/home-page/home-page.module';
import { ReservationPageModule } from './pages/reservation-page/reservation-page.module';
import { LoginPageModule } from './pages/login-page/login-page.module';
import { GalleryModule } from './pages/gallery/gallery.module';
import { FootballSchoolModule } from './pages/football-school/football-school.module';
import { CancellationPageModule } from './pages/cancellation-page/cancellation-page.module';
import { ContactUsModule } from './pages/contact-us/contact-us.module';
import { AdminPageModule } from './pages/admin-page/admin-page.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutUsModule } from './pages/about-us/about-us.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    TimeslotComponent,
    BlockTimeslotsComponent,
    AddTimeslotsComponent,
    ConfirmPaymentsComponent,
    BlockDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    HomePageModule,
    ReservationPageModule,
    LoginPageModule,
    GalleryModule,
    FootballSchoolModule,
    CancellationPageModule,
    ContactUsModule,
    AdminPageModule,
    AboutUsModule
  ],
  providers: [
    AdminService,
    ReservationService,
    provideHttpClient(withInterceptors([AuthInterceptor]), withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
