import { InfoComponent } from './students/info/info.component';
import { GradeCreateComponent } from './grades/grade-create/grade-create.component';
import { EditStudentsResolver } from './students/edit-students-resolver';
import { StudentsEditComponent } from './students/students-edit/students-edit.component';
import { StudentsAllComponent } from './students/students-all/students-all.component';
import { CreateStudentComponent } from './students/create-student/create-student.component';
import { EditSubjectResolver } from './subjects/edit-subject-resolver';
import { EditComponent } from './subjects/edit/edit.component';
import { CreateComponent } from './subjects/create/create.component';
import { AllComponent } from './subjects/all/all.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './core/home/home.component';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

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
    path: 'subjects',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/subjects/all',
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
      },
      {
        path: 'edit/:id',
        component: EditComponent,
        resolve: {
          data: EditSubjectResolver
        },
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: 'students',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/students/all',
        canActivate: [AuthGuard]
      },
      {
        path: 'all',
        component: StudentsAllComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'create',
        component: CreateStudentComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'edit/:id',
        component: StudentsEditComponent,
        resolve: {
          data: EditStudentsResolver
        },
        canActivate: [AuthGuard]
      },
      {
        path: 'info/:id',
        component: InfoComponent,
        resolve: {
          data: EditStudentsResolver
        }
      }
    ]
  },
  {
    path: 'grades',
    children: [
      {
        path: 'create/:id',
        component: GradeCreateComponent,
        resolve: {
          data: EditStudentsResolver
        },
        canActivate: [AuthGuard]
      }
    ]
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
