import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxsRoutingModule } from './ngxs-routing.module';
import { NgxsComponent } from './ngxs.component';


@NgModule({
  declarations: [
    NgxsComponent
  ],
  imports: [
    CommonModule,
    NgxsRoutingModule
  ]
})
export class NgxsModule { }
