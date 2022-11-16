import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistrationComponent} from "./registration/registration.component";
import {LoginComponent} from "./login/login.component";
import {UsersListComponent} from "./users-list/users-list.component";
import {RoutesManagementComponent} from "./routes-management/routes-management.component";
import {ForumComponent} from "./forum/forum.component";
import {CheckpointsComponent} from "./checkpoints/checkpoints.component";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'users', component: UsersListComponent},
  {path: 'routes-management', component: RoutesManagementComponent},
  {path: 'forum', component: ForumComponent},
  {path: 'checkpoints', component: CheckpointsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
