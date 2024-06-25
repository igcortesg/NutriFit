import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComidasService {
  private apiUrl = 'http://localhost:3000/api/comidas';

  constructor(private http: HttpClient) {}

  getComidas(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
