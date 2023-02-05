import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'rxjs',       loadChildren: () => import('./rxjs/rxjs.module').then(m => m.RxjsModule) }, 
    { path: 'algorithms', loadChildren: () => import('./algorithms/algorithms.module').then(m => m.AlgorithmsModule) },
    { path: 'testing',    loadChildren: () => import('./testing/testing.module').then(m => m.TestingModule) },
    { path: 'javascript', loadChildren: () => import('./javascript/javascript.module').then(m => m.JavascriptModule) },
    { path: 'ngxs',       loadChildren: () => import('./ngxs/ngxs.module').then(m => m.NgxsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
