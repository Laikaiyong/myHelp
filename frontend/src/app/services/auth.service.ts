import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import firebase from 'firebase/compat/app';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.backendApi + 'users';

  user$: Observable<firebase.User | null>;

  constructor(private http: HttpClient, private afAuth: AngularFireAuth) {
    this.user$ = this.afAuth.authState;
  }

  async signUp(email: string, password: string): Promise<firebase.User | null> {
    try {
      const headers = new HttpHeaders({       'Content-Type': 'application/json',
        'Accept': 'application/json' , 'Access-Control-Allow-Origin': "*"});
      const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
      if (result.user) {
        this.http.post(this.apiUrl, result.user,  { headers: headers }).subscribe(
          response => {
            console.log('API call successful:', response);
          },
          error => {
            console.error('API call failed:', error);
          }
        );
      }
      return result.user;
    } catch (error) {
      console.error('Error signing up:', error);
      return null;
    }
  }

  async signIn(email: string, password: string): Promise<firebase.User | null> {
    try {
      const headers = new HttpHeaders({       'Content-Type': 'application/json',
        'Accept': 'application/json' , 'Access-Control-Allow-Origin': "*"  });
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      if (result.user) {
        this.http.post(this.apiUrl, {
          "_id": result.user.uid,
          "email": result.user.email,
          "name": result.user.displayName
        },  { headers: headers }).subscribe(
          response => {
            console.log('API call successful:', response);
          },
          error => {
            console.error('API call failed:', error);
          }
        );
      }
      return result.user;
    } catch (error) {
      console.error('Error signing in:', error);
      return null;
    }
  }

  async signOut(): Promise<void> {
    try {
      await this.afAuth.signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  }

  getCurrentUser(): Observable<firebase.User | null> {
    return this.user$;
  }
}