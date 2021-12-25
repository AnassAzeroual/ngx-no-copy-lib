import { NgxNoCopyModule } from './../../../ngx-no-copy/src/lib/ngx-no-copy.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
