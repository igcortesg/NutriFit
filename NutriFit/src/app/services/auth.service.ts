import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:3000/api/auth'; // Cambia la URL según corresponda

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, contrasena: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, { email, contrasena }).pipe(
      tap((response) => {
        // Aquí puedes guardar el token JWT en el almacenamiento local o en una cookie segura
        localStorage.setItem('token', response.token);
        // Redirigir al usuario a la página deseada después de iniciar sesión
        this.router.navigateByUrl('/tabs/inicio');
      })
    );
  }

  register(usuario: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/register`, usuario).pipe(
      tap((response) => {
        // Redirigir al usuario a la página de inicio de sesión después del registro exitoso
        this.router.navigateByUrl('/inicio-sesion');
      })
    );
  }

  getUserData(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get<any>(`${this.baseUrl}/me`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  
}
