import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JavascriptComponent } from './javascript.component';
import { MicroMacroTastksComponent } from './micro-macro-tastks/micro-macro-tastks.component';

const routes: Routes = [
    { 
        path: '', 
        component: JavascriptComponent,
        children: [
            { path: 'micro-macro-tasks', component: MicroMacroTastksComponent }
        ] 
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JavascriptRoutingModule { }
