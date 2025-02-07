import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor() {
    
    const token = localStorage.getItem('auth_token');
    if (token) {
      this.isAuthenticatedSubject.next(true);
    }
  }
  
  login(token: string) {  
    localStorage.setItem('auth_token', token);
    this.isAuthenticatedSubject.next(true);
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.isAuthenticatedSubject.next(false);
  }
}
