import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BluetoothSpeakerComponent } from './bluetooth-speaker/bluetooth-speaker.component';
import {RoundProgressModule} from 'angular-svg-round-progressbar';

@NgModule({
  declarations: [
    AppComponent,
    BluetoothSpeakerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RoundProgressModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
