import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxNoCopyModule } from 'projects/ngx-no-copy/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxNoCopyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
