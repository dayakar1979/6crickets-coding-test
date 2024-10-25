import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeadlineService {
  private apiUrl = 'http://localhost:3000/api/deadline'; // Endpoint URL

  constructor(private http: HttpClient) {}

  // Method to get seconds left from the backend
  getSecondsLeft(): Observable<{ secondsLeft: number }> {
    return this.http.get<{ secondsLeft: number }>(this.apiUrl);
  }
}
