import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JavascriptRoutingModule } from './javascript-routing.module';
import { JavascriptComponent } from './javascript.component';
import { MicroMacroTastksComponent } from './micro-macro-tastks/micro-macro-tastks.component';


@NgModule({
  declarations: [
    JavascriptComponent,
    MicroMacroTastksComponent
  ],
  imports: [
    CommonModule,
    JavascriptRoutingModule
  ]
})
export class JavascriptModule { }
