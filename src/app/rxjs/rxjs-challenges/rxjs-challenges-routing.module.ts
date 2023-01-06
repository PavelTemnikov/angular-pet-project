import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Challenge20Component } from './challenge-20/challenge-20.component';
import { RxjsChallengesComponent } from './rxjs-challenges.component';

const routes: Routes = [
    { 
        path: '', 
        component: RxjsChallengesComponent,
        children: [
            {
                path: 'challenge-20',
                component: Challenge20Component
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsChallengesRoutingModule { }
