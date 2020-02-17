import { CreateComponent } from './teachers/create/create.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './core/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AllComponent } from './teachers/all/all.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'teachers',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/teachers/all',
        canActivate: [AuthGuard]
      },
      {
        path: 'all',
        component: AllComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'create',
        component: CreateComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
