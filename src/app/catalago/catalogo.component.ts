import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FilmeService } from '../shared/filme.service';
import { Filme } from '../shared/filme.model';

@Component({
    selector: 'app-catalogo',
    imports: [FormsModule, CommonModule],
    templateUrl: './catalogo.component.html',
    styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {
  catalogoFilmes: Filme[] = [];
  novoFilme: string = '';
  query: string = '';
  sugestoes: Filme[] = []; // Corrigido para Filme[]
  mostrarLista: boolean = false;

  constructor(private filmeService: FilmeService) {
    this.catalogoFilmes = this.filmeService.getFilmes();
  }

  buscarFilmes(): void {
    if (this.query.trim().length > 0) {
      this.sugestoes = this.catalogoFilmes.filter(filme =>
        filme.titulo.toLowerCase().includes('a') && filme.titulo.toLowerCase().includes(this.query.toLowerCase())
      );
    } else {
      this.sugestoes = [];
    }
  }

  addFilme(): void {
    if (this.novoFilme.trim() !== '') {
      this.filmeService.addFilme({
        titulo: this.novoFilme,
        sinopse: '',
        elenco: '',
        diretor: '',
        duracao: '',
        classificacao: ''
      });
      this.novoFilme = '';
      this.catalogoFilmes = this.filmeService.getFilmes();
    }
  }

  removerFilme(index: number): void {
    this.catalogoFilmes.splice(index, 1);
  }

  dicionarFilme() {
    throw new Error('Method not implemented.');
  }
}
