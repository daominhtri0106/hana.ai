import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerApplicationComponent } from './manager-application/manager-application.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ManagerApplicationComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListApplicationRoutingModule { }
