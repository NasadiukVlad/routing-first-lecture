import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {OrderDataComponent} from './components/order-data/order-data.component';
import {AboutComponent} from './components/about/about.component';
import {AppRoutingModule} from './app.routing';
import {HomeComponent} from './components/home/home.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    OrderDataComponent,
    AboutComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
