import { Routes } from "@angular/router";
import { TimeslotComponent } from "./components/time-slot/time-slot.component";
import { AuthGuard } from "./guards/authGuard/auth.guard";

export const routes: Routes = [
  { 
    path: '', 
    loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule) 
  },
  { 
    path: 'reservation/:fieldId', 
    loadChildren: () => import('./pages/reservation-page/reservation-page.module').then(m => m.ReservationPageModule)
  },
  { 
    path: 'school', 
    loadChildren: () => import('./pages/football-school/football-school.module').then(m => m.FootballSchoolModule)
  },
  { 
    path: 'gallery', 
    loadChildren: () => import('./pages/gallery/gallery.module').then(m => m.GalleryModule)
  },
  { 
    path: 'contact', 
    loadChildren: () => import('./pages/contact-us/contact-us.module').then(m => m.ContactUsModule)
  },
  { 
    path: 'login', 
    loadChildren: () => import('./pages/login-page/login-page.module').then(m => m.LoginPageModule)
  },
  { 
    path: 'cancel', 
    loadChildren: () => import('./pages/cancellation-page/cancellation-page.module').then(m => m.CancellationPageModule)
  },
  { 
    path: 'admin', 
    loadChildren: () => import('./pages/admin-page/admin-page.module').then(m => m.AdminPageModule), 
    canActivate: [AuthGuard] 
  },
  { path: 'about', 
    loadChildren: () => import('./pages/about-us/about-us.module').then(m => m.AboutUsModule)
  }
];