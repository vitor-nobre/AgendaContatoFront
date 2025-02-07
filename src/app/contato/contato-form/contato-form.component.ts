import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContatoService } from '../services/contato.service';
import { Contato } from '../model/contato.model';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MascaraTelefoneDirective } from '../../shared/directives/mascara-telefone/mascara-telefone.directive';

@Component({
  selector: 'app-contato',
  standalone: true,
  templateUrl: './contato-form.component.html',
  styleUrls: ['./contato-form.component.css'],
  imports: [ReactiveFormsModule, CommonModule, MascaraTelefoneDirective, RouterModule]
})
export class ContatoFormComponent implements OnInit {

  contatoId: number | null = null;

  contatoForm!: FormGroup;

  constructor(private contatoService: ContatoService, private route: ActivatedRoute, private router: Router) {
    console.log("construtor form")
  }

  ngOnInit(): void {
    this.contatoId = Number(this.route.snapshot.paramMap.get('id')!);
    console.log("teste")
    this.contatoForm = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      telefone: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
      celular: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{11}$')]),
      favorito: new FormControl('', Validators.required),
      ativo: new FormControl('', Validators.required),
      dhCad: new FormControl('', Validators.required)
    });

    if (this.contatoId != 0) {
      console.log("contatoid if")
      this.contatoService.getContatoById(this.contatoId).subscribe(contato => {
        this.contatoForm.patchValue(contato);
      });
    }
  }

  onSubmit() {
    const contato: Contato = this.contatoForm.value;
    contato.telefone = contato.telefone.replace(/\D/g, '');
    contato.celular = contato.celular.replace(/\D/g, '');

    console.log(contato)
    if (this.contatoId) {
      contato.id = this.contatoId
      this.contatoService.updateContato(contato).subscribe({
        next: (res) => this.router.navigate(['/contatos']),
        error: (err) => console.error("Erro aaana requisição", err)
      });
    } else {
      this.contatoService.createContato(contato).subscribe({
        next: (res) => this.router.navigate(['/contatos']),
        error: (err) => console.error("Erro na requisição", err)
      });
    }
    console.log("submit form")
  }
}
