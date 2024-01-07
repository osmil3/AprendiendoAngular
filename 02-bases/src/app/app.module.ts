import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CounterModules } from './counter/Counter.modules';
import { HeoresModules } from './heroes/heroes.modules';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModules,
    HeoresModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
