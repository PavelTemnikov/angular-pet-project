import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlgorithmsRoutingModule } from './algorithms-routing.module';
import { AlgorithmsComponent } from './algorithms.component';


@NgModule({
  declarations: [
    AlgorithmsComponent
  ],
  imports: [
    CommonModule,
    AlgorithmsRoutingModule
  ]
})
export class AlgorithmsModule { }
