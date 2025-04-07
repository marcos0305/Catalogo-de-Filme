import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-admin-filme-form',
    imports: [CommonModule, FormsModule,],
    templateUrl: './admin-filme-form.component.html',
    styleUrls: ['./admin-filme-form.component.css']
})
export class AdminFilmeFormComponent implements OnInit {
  FilmeService: any;

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  novoFilme={
    titulo:'',
    sinopse: '',
    elenco:'',
    diretor: '',
    duracao:'',
    classificacao: '',
  }
adcionarFilme(){
  if(this.novoFilme.titulo.trim()){
    this.FilmeService.addFilme({...this.novoFilme});
    this.novoFilme ={titulo:'',sinopse:'', elenco:'', diretor:'', duracao:'', classificacao:'' };
  }
}


}
