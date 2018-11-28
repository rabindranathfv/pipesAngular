import { Component } from '@angular/core';
import { resolve } from 'url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

  videoUrl = 'tgbNymZ7vqY';
}
