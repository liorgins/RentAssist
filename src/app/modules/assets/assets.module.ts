import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetsRoutingModule } from './assets-routing.module';
import { AssetsListComponent } from './assets-list/assets-list.component';
import { AssetsDetailsComponent } from './assets-details/assets-details.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AssetsListComponent,
    AssetsDetailsComponent
  ],
  imports: [
    CommonModule,
    AssetsRoutingModule,
    ReactiveFormsModule
  ]
})
export class AssetsModule { }
