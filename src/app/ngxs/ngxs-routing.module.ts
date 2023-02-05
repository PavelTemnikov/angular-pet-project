import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxsComponent } from './ngxs.component';

const routes: Routes = [{ path: '', component: NgxsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgxsRoutingModule { }
