import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrenciesComponent } from './currencies/currencies.component';
import { MyalertsComponent } from './myalerts/myalerts.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrenciesComponent,
    MyalertsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
