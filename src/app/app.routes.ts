import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FinancialEducationComponent } from './pages/financial-education/financial-education.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { UnderConstructionComponent } from './pages/under-construction/under-construction.component';
import { EntrepreneurSupportComponent } from './pages/entrepreneur-support/entrepreneur-support.component';

export const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },

  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'financial-education',
        component: FinancialEducationComponent
      },
      {
        path: 'entrepreneur-support',
        component: EntrepreneurSupportComponent
      }
    ]
  },

  {
    path: '**',
    redirectTo: ''
  }

];
