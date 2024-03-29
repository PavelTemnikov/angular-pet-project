import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([], {
      developmentMode: true,
      selectorOptions: {
        suppressErrors: false,
        injectContainerState: false
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
