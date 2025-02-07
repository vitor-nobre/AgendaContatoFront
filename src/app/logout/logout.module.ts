import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoutComponent } from './logout.component';

@NgModule({
  declarations: [LogoutComponent],
  imports: [
    CommonModule  // Importando CommonModule para usar as diretivas do Angular
  ],
  exports: [LogoutComponent]  // Exporte se precisar usar o LogoutComponent em outros módulos
})
export class LogoutModule { }
