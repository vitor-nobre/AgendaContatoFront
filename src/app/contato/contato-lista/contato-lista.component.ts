import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../services/contato.service';
import { Contato } from '../model/contato.model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contato-list',
  templateUrl: './contato-lista.component.html',
  styleUrls: ['./contato-lista.component.css'],
  imports: [RouterModule, CommonModule]
})
export class ContatoListComponent implements OnInit {

  contatos: Contato[] = [];

  constructor(private contatoService: ContatoService) { }

  ngOnInit(): void {
    console.log("Entrou lista")
    this.loadContatos();
  }

  loadContatos(): void {
    this.contatoService.getContatos().subscribe(data => {
      this.contatos = data;
    });
  }

  deleteContato(id: number): void {
    this.contatoService.deleteContato(id).subscribe(() => {
      this.loadContatos();
    });
  }

  favoritarContato(id: number): void {
    this.contatoService.favoritarContato(id).subscribe(() => {
      this.loadContatos();
    });
  }

}
