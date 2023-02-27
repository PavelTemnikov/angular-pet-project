import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsComponent } from './rxjs.component';
import { OperatorsComponent } from "./operators/operators.component";

const routes: Routes = [
    { 
        path: '', 
        component: RxjsComponent,
        children: [
            { 
                path: 'challenges',
                loadChildren: () => import('./rxjs-challenges/rxjs-challenges.module').then(m => m.RxjsChallengesModule) 
            },
            {
                path: 'operators',
                component: OperatorsComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule { }
