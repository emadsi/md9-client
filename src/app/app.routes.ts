import { Routes } from "@angular/router";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { AdminPageComponent } from "./pages/admin-page/admin-page.component";
import { CancellationPageComponent } from "./pages/cancellation-page/cancellation-page.component";
import { PaymentPageComponent } from "./pages/payment-page/payment-page.component";
import { ReservationPageComponent } from "./pages/reservation-page/reservation-page.component";
import { TimeslotComponent } from "./components/timeslot/timeslot.component";
import { AuthGuard } from "./guards/authGuard/auth.guard";
import { FootballSchoolComponent } from "./pages/football-school/football-school.component";
import { GalleryComponent } from "./pages/gallery/gallery.component";
import { ContactUsComponent } from "./pages/contact-us/contact-us.component";
import { AboutUsComponent } from "./pages/about-us/about-us.component";

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'reservation/:fieldId', component: ReservationPageComponent },
  { path: 'school', component: FootballSchoolComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'login', component: LoginPageComponent },
  // { path: 'payment', component: PaymentPageComponent },
  { path: 'cancel', component: CancellationPageComponent },
  { path: 'admin', component: AdminPageComponent, canActivate: [AuthGuard] },
  { path: 'timeslot', component: TimeslotComponent},
];