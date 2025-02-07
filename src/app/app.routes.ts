import { Routes } from '@angular/router';
import { ContatoListComponent } from './contato/contato-lista/contato-lista.component';
import { ContatoFormComponent } from './contato/contato-form/contato-form.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from './core/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'contatos', component: ContatoListComponent, canActivate: [AuthGuard] },
  { path: 'contatos/add', component: ContatoFormComponent, canActivate: [AuthGuard] },
  { path: 'contatos/edit/:id', component: ContatoFormComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: ''}
];
