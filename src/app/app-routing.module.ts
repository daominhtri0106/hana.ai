import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './page/login-page/login-page.component';
import { AuthGuardService } from './service/auth-guard.service';
import { AuthLoginService } from './service/auth-login.service';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [AuthLoginService],
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./page/applications/list-application.module').then(m => m.ListApplicationModule)
  },
  {
    path: '**',
    component: NotfoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
