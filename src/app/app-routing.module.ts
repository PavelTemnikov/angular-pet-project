import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'rxjs', loadChildren: () => import('./rxjs/rxjs.module').then(m => m.RxjsModule) }, 
    { path: 'algorithms', loadChildren: () => import('./algorithms/algorithms.module').then(m => m.AlgorithmsModule) 
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
