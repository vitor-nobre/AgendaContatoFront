import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContatoFormComponent } from './contato-form.component';

@NgModule({
  declarations: [ContatoFormComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ContatoFormComponent]
})
export class ContatoFormModule { }
