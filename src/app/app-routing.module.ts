import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistrationComponent} from "./registration/registration.component";
import {LoginComponent} from "./login/login.component";
import {UsersListComponent} from "./users-list/users-list.component";
import {RoutesManagementComponent} from "./routes-management/routes-management.component";
import {ForumComponent} from "./forum/forum.component";
import {CheckpointsComponent} from "./checkpoints/checkpoints.component";
import {AuthGuard} from "./login/auth.guard";
import {RoutesComponent} from "./routes/routes.component";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'users', component: UsersListComponent,
    canActivate:[AuthGuard],
    data: {
      role: 'Manager',
      superUser: 'Admin'
    }
  },
  {path: 'routes-management', component: RoutesManagementComponent,
    canActivate:[AuthGuard],
    data: {
      role: 'Manager',
      superUser: 'Admin'
    }
  },
  {path: 'forum', component: ForumComponent, canActivate:[AuthGuard]},
  {path: 'checkpoints', component: CheckpointsComponent, canActivate:[AuthGuard]
  },
  {path: 'routes', component: RoutesComponent,
    canActivate:[AuthGuard],
    data: {
      role: 'Driver',
      superUser: 'Admin'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
