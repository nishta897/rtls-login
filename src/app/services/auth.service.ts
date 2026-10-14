
import { HttpClient } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://motivestaging.gctmaestro.com/admin/login';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  login(email: string, password: string): Observable<any> {
    const isLocalDevelopment =
      isDevMode() &&
      typeof window !== 'undefined' &&
      window.location.hostname === 'localhost';

    // Local-only demo login
    if (isLocalDevelopment) {
      const validEmail = 'nishta@demo.com';
      const validPassword = 'Nishta@123';

      if (
        email.trim().toLowerCase() === validEmail &&
        password === validPassword
      ) {
        return of({
          payload: {
            token: 'local-demo-token',
            user: {
              email: validEmail,
              name: 'Local Demo User',
              role: 'admin'
            }
          }
        });
      }

      return throwError(
        () => new Error('Invalid demo email or password.')
      );
    }

    // Existing staging authentication remains unchanged.
    return this.http.post<any>(this.apiUrl, { email, password });
  }

  saveUserSession(token: string, email: string) {
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('email', email);
  }

  getCurrentUserEmail(): string | null {
    return sessionStorage.getItem('email');
  }

  logout() {
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!sessionStorage.getItem('token');
  }
}
