import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service'; // Importa o serviço de autenticação

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(
    private authService: AuthService,  // Injeta o serviço de autenticação
    private router: Router             // Injeta o roteador para navegação
  ) {
    // Chama o logout assim que o componente for carregado
    this.authService.logout();
    this.router.navigate(['/login']);  // Redireciona para a página de login
  }
}
