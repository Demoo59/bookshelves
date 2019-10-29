import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: 'AIzaSyBjGUMnDK_0gC_De5v3EmPSOQj1CWTTGmM',
      authDomain: 'bookshelves-3859b.firebaseapp.com',
      databaseURL: 'https://bookshelves-3859b.firebaseio.com',
      projectId: 'bookshelves-3859b',
      storageBucket: 'bookshelves-3859b.appspot.com',
      messagingSenderId: '447191644591',
      appId: '1:447191644591:web:5d1b8282ee1e4965c8d75a',
      measurementId: 'G-2V24TC9HSB'
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
