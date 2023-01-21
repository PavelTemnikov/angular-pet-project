import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { TestingRoutingModule } from './testing-routing.module';
import { TestingComponent } from './testing.component';
import { DashboardHeroComponent } from './dashboard/dashboard-hero.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeroDetailComponent } from './hero/hero-detail.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BackendInterceptor } from './fake-backend/backend-interceptor';
import { TwainComponent } from './twain/twain.component';
import { TwainService } from './twain/twain.service';


@NgModule({
  declarations: [
    TestingComponent,
    DashboardHeroComponent,
    WelcomeComponent,
    HeroDetailComponent,
    TwainComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    TestingRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BackendInterceptor, multi: true },
    TwainService
  ]
})
export class TestingModule { }
