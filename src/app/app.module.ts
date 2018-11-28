import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// for own Pipe implementation
import { specialPipe  } from './pipes/specialPipe.pipe';
import { SafeDomPipe } from './pipes/safe-dom.pipe';

import { EmbedVideo } from 'ngx-embed-video';
@NgModule({
  declarations: [
    AppComponent,
    // add new pipe here
    specialPipe,
    SafeDomPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EmbedVideo.forRoot()
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
