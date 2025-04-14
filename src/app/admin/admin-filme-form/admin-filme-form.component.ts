import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilmeService } from '../../shared/filme.service';

@Component({
  selector: 'app-admin-filme-form',
  standalone: true, // Mude para true
  imports: [CommonModule, FormsModule], // Adicione as dependências
  templateUrl: './admin-filme-form.component.html',
  styleUrls: ['./admin-filme-form.component.css']
})
export class AdminFilmeFormComponent {
  novoFilme = {
    titulo: '',
    sinopse: '',
    elenco: '',
    diretor: '',
    duracao: '',
    classificacao: ''
  };

  constructor(private filmeService: FilmeService) {}

  adicionarFilme() {
    if (this.novoFilme.titulo.trim()) {
      this.filmeService.addFilme({ ...this.novoFilme });
      this.novoFilme = { titulo: '', sinopse: '', elenco: '', diretor: '', duracao: '', classificacao: '' };
    }
  }
}
