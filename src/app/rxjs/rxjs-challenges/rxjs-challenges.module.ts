import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsChallengesRoutingModule } from './rxjs-challenges-routing.module';
import { RxjsChallengesComponent } from './rxjs-challenges.component';
import { Challenge20Component } from './challenge-20/challenge-20.component';


@NgModule({
  declarations: [
    RxjsChallengesComponent,
    Challenge20Component
  ],
  imports: [
    CommonModule,
    RxjsChallengesRoutingModule
  ]
})
export class RxjsChallengesModule { }
