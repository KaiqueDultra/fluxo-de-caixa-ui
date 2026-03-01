import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { FooterComponent } from '../../shared/footer/footer.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-main-layout',
  imports: [
    HeaderComponent,
    RouterOutlet,
    FooterComponent
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {

  isDashboard = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.isDashboard =
          this.router.url === '/' ||
          this.router.url.includes('dashboard');
      });
  }

}
