import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestingRoutingModule } from './testing-routing.module';
import { TestingComponent } from './testing.component';
import { DashboardHeroComponent } from './dashboard/dashboard-hero.component';
import { WelcomeComponent } from './welcome/welcome.component';


@NgModule({
  declarations: [
    TestingComponent,
    DashboardHeroComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    TestingRoutingModule
  ]
})
export class TestingModule { }
