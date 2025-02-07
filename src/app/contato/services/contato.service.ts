import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contato } from '../model/contato.model';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private apiUrl = 'http://localhost:8080/contato';

  constructor(private http: HttpClient) {}

  getContatos(): Observable<Contato[]> {
    return this.http.get<Contato[]>(this.apiUrl);
  }

  getContatoById(id: number): Observable<Contato> {
    return this.http.get<Contato>(`${this.apiUrl}/${id}`);
  }

  createContato(contato: Contato): Observable<Contato> {
    return this.http.post<Contato>(this.apiUrl, contato);
  }

  updateContato(contato: Contato): Observable<Contato> {
    return this.http.put<Contato>(`${this.apiUrl}/${contato.id}`, contato);
  }

  deleteContato(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  favoritarContato(id: number): Observable<Contato> {
    return this.http.patch<Contato>(`${this.apiUrl}/${id}`,{});
  }
}
