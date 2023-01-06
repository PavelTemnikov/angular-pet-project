import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsComponent } from './rxjs.component';

const routes: Routes = [
    { 
        path: '', 
        component: RxjsComponent,
        children: [
            { 
                path: 'rxjs-challenges', 
                loadChildren: () => import('./rxjs-challenges/rxjs-challenges.module').then(m => m.RxjsChallengesModule) 
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule { }
