import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxsRoutingModule } from './ngxs-routing.module';
import { NgxsComponent } from './ngxs.component';
import { ZooState } from './states/zoo.state';
import { ZooComponent } from './zoo/zoo.component';


@NgModule({
  declarations: [
    NgxsComponent,
    ZooComponent
  ],
  imports: [
    CommonModule,
    NgxsRoutingModule,
    ReactiveFormsModule,
    NgxsModule.forFeature([ZooState])
  ]
})
export class MyNgxsModule { }
