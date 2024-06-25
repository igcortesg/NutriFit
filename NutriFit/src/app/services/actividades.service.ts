import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActividadesService {
  private apiUrl = 'http://localhost:3000/api/actividades'; // Actualiza la URL para actividades

  constructor(private http: HttpClient) {}

  getActividades(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Agrega métodos adicionales según sea necesario, como agregar, eliminar, actualizar actividades
  
}
