import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// for own Pipe implementation
import { specialPipe  } from './pipes/specialPipe.pipe';
@NgModule({
  declarations: [
    AppComponent,
    // add new pipe here
    specialPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
