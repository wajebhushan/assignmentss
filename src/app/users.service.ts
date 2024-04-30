import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: AngularFirestore

  ) { }

  //get usersList and add docId for update userStatus
  getUsers(): Observable<any[]> {
    return this.firestore.collection('users').snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as any;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  //for update user status
  updateUserDisabledStatus(userId: string, disabled: boolean): Promise<void> {
    return this.firestore.collection('users').doc(userId).update({ disabled });
  }
}
