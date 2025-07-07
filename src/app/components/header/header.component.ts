import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    standalone: false
})
export class HeaderComponent implements OnInit {
  private readonly ADMIN_DATA = 'adminData';
  isAdminLogged: boolean = false
  readonly tabRoutes: string[] = ['/', '/school', '/gallery', '/contact', '/about'];
  selectedTabIndex = 0;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.isAdminLoggedIn$.subscribe((status) => {
      this.isAdminLogged = status;
    });

    // Update tab selection when route changes
    this.router.events.subscribe(() => {
      const currentRoute = this.router.url;
      const index = this.tabRoutes.findIndex(path => currentRoute.startsWith(path));
      this.selectedTabIndex = index !== -1 ? index : 0;
    });
  }
  
  onTabChange(index: number) {
    this.selectedTabIndex = index;
    const path = this.tabRoutes[index];
    this.router.navigate([path]);
  }

  handleHomePage() {
    this.router.navigate(['/']);
  }

  handleAdminLogin() {
    this.router.navigate(['login']);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
