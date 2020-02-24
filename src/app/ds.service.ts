import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
//import firestore from 'firebase/firestore'

@Injectable({
  providedIn: 'root'
})
export class DsService {
  ref = firebase.firestore().collection('login');

  constructor() { }
  getlogin(): Observable<any> {
    return new Observable((observer) => {
      this.ref.onSnapshot((querySnapshot) => {
        let login = [];
        querySnapshot.forEach((doc) => {
          let data = doc.data();
          login.push({
            key: doc.id,
            username: data.username,
            password: data.password,
          });
        });
        observer.next(login);
      });
    });
  }
  getlogins(id: string): Observable<any> {
    return new Observable((observer) => {
      this.ref.doc(id).get().then((doc) => {
        let data = doc.data();
        observer.next({
          key: doc.id,
          username: data.username,
          password: data.password
          
        });
      });
    });
  }
  postlogin(data): Observable<any> {
    return new Observable((observer) => {
      this.ref.add(data).then((doc) => {
        observer.next({
          key: doc.id,
        });
      });
    });
  }
  updatedata(id: string, data): Observable<any> {
    return new Observable((observer) => {
      this.ref.doc(id).set(data).then(() => {
        observer.next();
      });
    });
  }
}


