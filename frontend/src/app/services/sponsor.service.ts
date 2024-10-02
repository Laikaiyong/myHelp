import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import firebase from 'firebase/compat/app';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SponsorService {
  private apiUrl = environment.backendApi + 'sponsors';
  user$: Observable<firebase.User | null>;
  private userId = "";

  constructor(private http: HttpClient, private afAuth: AngularFireAuth) {
    this.user$ = this.afAuth.authState;
  }

  addSponsorPackage(sponsorData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': "*"
    });
    this.user$.subscribe(event => this.userId = event!.uid);
    return this.http.post(this.apiUrl, {
      ...sponsorData,
      "userId": this.userId
    }, { headers: headers });
  }

  getSponsorshipLeaderboard(): Observable<any> {
    return this.http.get(`${this.apiUrl}/leaderboard`);
  }

  updateSponsorPackage(companyId: string, sponsorPackage: string, updateData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': "*"
    });
    return this.http.put(`${this.apiUrl}/${companyId}/${sponsorPackage}`, updateData, { headers: headers });
  }
}