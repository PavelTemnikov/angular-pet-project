import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Challenge19Component } from './challenge-19/challenge-19.component';
import { Challenge20Component } from './challenge-20/challenge-20.component';
import { RxjsChallengesComponent } from './rxjs-challenges.component';

const routes: Routes = [
    { 
        path: '', 
        component: RxjsChallengesComponent,
        children: [
            {
                path: 'challenge-19',
                component: Challenge19Component
            },
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
