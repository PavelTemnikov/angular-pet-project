import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsChallengesRoutingModule } from './rxjs-challenges-routing.module';
import { RxjsChallengesComponent } from './rxjs-challenges.component';
import { Challenge20Component } from './challenge-20/challenge-20.component';
import { RippleDirective } from './challenge-20/ripple.directive';


@NgModule({
  declarations: [
    RxjsChallengesComponent,
    Challenge20Component,
    RippleDirective
  ],
  imports: [
    CommonModule,
    RxjsChallengesRoutingModule
  ]
})
export class RxjsChallengesModule { }
