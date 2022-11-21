import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: MainComponent,
    data: {wow: 'some'},
    children: [
      {
        path: 'home',
        component: HomeComponent,
        data: {
          title: 'Dashboard'
        }
      },
      {
        path: 'assets',
        loadChildren: () => import('./modules/assets/assets.module').then(m => m.AssetsModule),
        data: {
          title: 'Assets'
        }
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{paramsInheritanceStrategy: 'always'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
