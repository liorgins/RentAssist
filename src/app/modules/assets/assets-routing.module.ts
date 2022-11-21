import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetsDetailsComponent } from './assets-details/assets-details.component';
import { AssetsListComponent } from './assets-list/assets-list.component';

const routes: Routes = [
  {
    path: '',
    component: AssetsListComponent
  },
  {
    path: ':id',
    component: AssetsDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetsRoutingModule { }
