import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { TestingRoutingModule } from './testing-routing.module';
import { TestingComponent } from './testing.component';
import { DashboardHeroComponent } from './dashboard/dashboard-hero.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeroDetailComponent } from './hero/hero-detail.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BackendInterceptor } from './fake-backend/backend-interceptor';


@NgModule({
  declarations: [
    TestingComponent,
    DashboardHeroComponent,
    WelcomeComponent,
    HeroDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TestingRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BackendInterceptor, multi: true }
  ]
})
export class TestingModule { }
