import { Component } from '@angular/core';
import { resolve } from 'url';

import { EmbedVideoService } from 'ngx-embed-video';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  idUrl = 'zq6fVcOky1s';
  iframe_html: any;
  youtubeUrl = 'https://www.youtube.com/embed/p1ueJ-1zB9I';
  constructor( private embedVideoService: EmbedVideoService,
               private domSanatizer: DomSanitizer
  ) {
    // console.log(this.embedVideoService.embed_youtube(this.idUrl));
    this.iframe_html = this.embedVideoService.embed_youtube(this.idUrl);
  }

  title = 'pipesApp';
  nombre = 'Rabindranath Ferreira';
  arr = [1, 2, 6, 7, 8, 9, 2, 5];
  PI = Math.PI;
  dec = 0.5344;
  money = 24608;
  jsonObj = {
    'nombre': 'rabindranath',
    'apellido': 'ferreira',
    'edad': 16,
    'correo': 'tet@gmail.com'

  };

  valuePromise = new Promise( (res, reject) => {
    setTimeout( () => ('data test'), 2500);
  });

  dateTest = new Date();

  formatName = 'RABINdranath fERREIRA';
  srcURL = this.domSanatizer.bypassSecurityTrustResourceUrl(this.youtubeUrl);

  passwd = 'absWSDCCs879sa&*^%';
  passAct = true;
  activatePipe() {
    return (this.passAct) ? this.passAct = false : this.passAct = true;
  }
}
