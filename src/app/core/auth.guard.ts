import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.isAuthenticated$.pipe(
      tap(isAuthenticated => {
        if (!isAuthenticated) {
          this.showErrorAndRedirect();
        }
      })
    );
  }

  private showErrorAndRedirect(): void {
    this.snackBar.open('Você precisa estar autenticado para acessar esta página!', 'OK', {
      duration: 5000,
      panelClass: ['error-snackbar'],
    });

    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 5000);
  }
}
