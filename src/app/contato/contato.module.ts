import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { ContatoListComponent } from './contato-lista/contato-lista.component';
import { ContatoFormComponent } from './contato-form/contato-form.component';

@NgModule({
  declarations: [
    ContatoListComponent,
    ContatoFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule 
  ],
  exports: [
    ContatoListComponent,
    ContatoFormComponent,
  ]
})
export class ContatoModule { }
