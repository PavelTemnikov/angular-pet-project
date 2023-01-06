import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsChallengesComponent } from './rxjs-challenges.component';

const routes: Routes = [{ path: '', component: RxjsChallengesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsChallengesRoutingModule { }
