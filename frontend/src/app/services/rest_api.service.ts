import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  private apiUrl = "https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateText";
  private localApiUrl = "http://localhost:8000";
  
  constructor(private http: HttpClient) { }
  
generateText(promptText: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = {
      prompt: { text: promptText },
      temperature: 1.0,
      candidateCount: 1
    };

    const fullUrl = `${this.apiUrl}?key=${environment.palmApi.apiKey}`;

    return this.http.post<any>(fullUrl, body, { headers })
      .pipe(
        tap(_ => console.log('request made to language model')),
        map(response => {
          return response.candidates.map((candidate:any) => candidate.output) ?? [];
        }),
        catchError(this.handleError<any>('generateText', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }


    getLocalData(): Observable<any> {
    return this.http.get<any>(`${this.localApiUrl}`)
      .pipe(
        tap(_ => console.log('fetched data from local API')),
        catchError(this.handleError<any>('getLocalData', []))
      );
  }
}
  


//   '{
//     "prompt": {
//           "text": "Write a story about a magic backpack."
//           },
//     "temperature": 1.0,
//     "candidateCount": 2}'
// }

// {
//   "candidates": [
//     {
//       "output": "Once upon a time, there was a young girl named Lily...",
//       "safetyRatings": [
//         {
//           "category": "HARM_CATEGORY_DEROGATORY",
//           "probability": "NEGLIGIBLE"
//         }, ...
//       ]
//     {
//       "output": "Once upon a time, there was a young boy named Billy...",
//       "safetyRatings": [
//           ...
//       ]
//     }
//   ]
// }
