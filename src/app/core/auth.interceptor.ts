import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (!this.authService.isAuthenticated$) {
      console.warn('🔒 Bloqueando requisição não autorizada');
      return next.handle(req.clone({ setHeaders: { 'Block-Request': 'true' } }));
    }
    return next.handle(req);
  }
}
