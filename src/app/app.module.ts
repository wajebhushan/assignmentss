import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { AngularFireModule } from '@angular/fire/compat';
import {
  MatSnackBarActions,
  MatSnackBarLabel,
} from '@angular/material/snack-bar';

//create a firebase interface
interface FirebaseConfigType {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

// Firebase configuration
const firebaseConfig: FirebaseConfigType = {
  apiKey: 'AIzaSyB4R165s323oyQPpgWOqATM4jVUFV0nx8k',
  authDomain: 'assignment-7474c.firebaseapp.com',
  projectId: 'assignment-7474c',
  storageBucket: 'assignment-7474c.appspot.com',
  messagingSenderId: '611509874361',
  appId: '1:611509874361:web:65e079b83f0ca1c77af568',
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatTableModule,
    MatSnackBarLabel,
    MatSnackBarActions,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
