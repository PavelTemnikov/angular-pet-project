import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsChallengesRoutingModule } from './rxjs-challenges-routing.module';
import { RxjsChallengesComponent } from './rxjs-challenges.component';


@NgModule({
  declarations: [
    RxjsChallengesComponent
  ],
  imports: [
    CommonModule,
    RxjsChallengesRoutingModule
  ]
})
export class RxjsChallengesModule { }
