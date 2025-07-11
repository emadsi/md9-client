import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    standalone: false
})
// export class HeaderComponent implements OnInit {
//   private readonly ADMIN_DATA = 'adminData';
//   isAdminLogged: boolean = false
//   readonly tabRoutes: string[] = ['/', '/school', '/gallery', '/contact', '/about'];
//   selectedTabIndex = 0;

//   constructor(private router: Router, private authService: AuthService) {}

//   ngOnInit(): void {
//     this.authService.isAdminLoggedIn$.subscribe((status) => {
//       this.isAdminLogged = status;
//     });

//     // Update tab selection when route changes
//     this.router.events.subscribe(() => {
//       const currentRoute = this.router.url;
//       const index = this.tabRoutes.findIndex(path => currentRoute.startsWith(path));
//       this.selectedTabIndex = index !== -1 ? index : 0;
//     });
//   }
  
//   onTabChange(index: number) {
//     this.selectedTabIndex = index;
//     const path = this.tabRoutes[index];
//     this.router.navigate([path]);
//   }

//   handleHomePage() {
//     this.router.navigate(['/']);
//   }

//   handleAdminLogin() {
//     this.router.navigate(['login']);
//   }

//   logout() {
//     this.authService.logout();
//     this.router.navigate(['/']);
//   }
// }

// export class HeaderComponent implements OnInit {
//   isAdminLogged = false;
//   sidenavOpened = false;

//   constructor(private router: Router, private authService: AuthService) {}

//   ngOnInit(): void {
//     this.authService.isAdminLoggedIn$.subscribe((status) => {
//       this.isAdminLogged = status;
//     });
//   }

//   toggleSidenav() {
//     this.sidenavOpened = !this.sidenavOpened;
//   }

//   navigateTo(path: string, sidenav?: any) {
//     if (sidenav) sidenav.close();
//     this.router.navigate([path]);
//   }

//   handleAdminLogin() {
//     this.router.navigate(['login']);
//   }

//   logout() {
//     this.authService.logout();
//     this.router.navigate(['/']);
//   }
// }

export class HeaderComponent implements OnInit {
  isAdminLogged = false;
  isMobile = false;
  sidenavOpened = false;

  tabRoutes: string[] = ['/', '/school', '/gallery', '/contact', '/about'];
  selectedTabIndex = 0;

  constructor(
    private router: Router,
    private authService: AuthService,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.authService.isAdminLoggedIn$.subscribe((status) => {
      this.isAdminLogged = status;
    });

    // this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Tablet])
    this.breakpointObserver.observe(['(max-width: 991px)']) // Optional: Tune this value
      .subscribe(result => {
        this.isMobile = result.matches;
      });

    this.router.events.subscribe(() => {
      const currentRoute = this.router.url;
      const index = this.tabRoutes.findIndex(path => currentRoute.startsWith(path));
      this.selectedTabIndex = index !== -1 ? index : 0;
    });
  }

  onTabChange(index: number): void {
    this.selectedTabIndex = index;
    this.router.navigate([this.tabRoutes[index]]);
  }

  toggleSidenav(): void {
    this.sidenavOpened = !this.sidenavOpened;
  }

  navigateTo(path: string): void {
    this.router.navigate([path]);
    this.sidenavOpened = false;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  handleAdminLogin(): void {
    this.router.navigate(['/login']);
  }
}