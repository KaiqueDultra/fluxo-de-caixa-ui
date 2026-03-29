import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FinancialEducationComponent } from './pages/financial-education/financial-education.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { UnderConstructionComponent } from './pages/under-construction/under-construction.component';
import { EntrepreneurSupportComponent } from './pages/entrepreneur-support/entrepreneur-support.component';
import { SheetControlComponent } from './pages/sheet-control/sheet-control.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';

export const routes: Routes = [

  // 🔓 ROTAS PÚBLICAS
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },

  // 🔒 ROTAS COM LAYOUT (APP)
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
        path: 'under-construction',
        component: UnderConstructionComponent
      },
      {
        path: 'entrepreneur-support',
        component: EntrepreneurSupportComponent
      },
      {
        path: 'sheet-control',
        component: SheetControlComponent
      },
      {
        path: 'about',
        component: AboutComponent
      }
    ]
  },

  {
    path: '**',
    redirectTo: 'login'
  }

];
