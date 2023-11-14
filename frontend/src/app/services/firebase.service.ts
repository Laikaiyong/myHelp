import { Injectable } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: Firestore) { }

  getFireStore(route: string) {
    const itemRef = collection(this.firestore, route);
    return collectionData(itemRef);
  }
}
