import { Injectable } from '@angular/core';
import { Filme } from './filme.model'; // Importe a interface

@Injectable({
  providedIn: 'root'
})
export class FilmeService {
  public filmes: Filme[] = [
    { titulo: 'O poderoso Chefão', sinopse: 'Um clássico sobre a máfia italiana.', elenco: 'Marlon Brando, Al Pacino', diretor: 'Francis Ford Coppola', duracao: '175', classificacao: '16' },
    { titulo: 'O Senhor dos Aneis', sinopse: 'Uma jornada épica na Terra Média.', elenco: 'Elijah Wood, Ian McKellen', diretor: 'Peter Jackson', duracao: '178', classificacao: '12' },
    { titulo: 'Matrix', sinopse: 'Um hacker descobre a verdade sobre a realidade.', elenco: 'Keanu Reeves, Laurence Fishburne', diretor: 'Lana Wachowski, Lilly Wachowski', duracao: '136', classificacao: '14' },
    { titulo: 'Interestelar', sinopse: 'Uma missão espacial para salvar a humanidade.', elenco: 'Matthew McConaughey, Anne Hathaway', diretor: 'Christopher Nolan', duracao: '169', classificacao: '10' },
    { titulo: 'Pulp Fiction', sinopse: 'Histórias interligadas de crime e redenção.', elenco: 'John Travolta, Samuel L. Jackson', diretor: 'Quentin Tarantino', duracao: '154', classificacao: '18' },
    { titulo: 'Parasita', sinopse: 'Uma família pobre se infiltra na vida de uma família rica.', elenco: 'Song Kang-ho, Lee Sun-kyun', diretor: 'Bong Joon-ho', duracao: '132', classificacao: '16' },
    { titulo: 'A Origem (Inception)', sinopse: 'Um ladrão invade sonhos para roubar segredos.', elenco: 'Leonardo DiCaprio, Joseph Gordon-Levitt', diretor: 'Christopher Nolan', duracao: '148', classificacao: '14' },
    { titulo: 'O Cavaleiro das Trevas (The Dark Knight)', sinopse: 'Batman enfrenta o Coringa.', elenco: 'Christian Bale, Heath Ledger', diretor: 'Christopher Nolan', duracao: '152', classificacao: '14' },
    { titulo: 'Clube da Luta (Fight Club)', sinopse: 'Um homem cria um clube de luta underground.', elenco: 'Brad Pitt, Edward Norton', diretor: 'David Fincher', duracao: '139', classificacao: '18' },
    { titulo: 'Gladiador', sinopse: 'Um general romano busca vingança.', elenco: 'Russell Crowe, Joaquin Phoenix', diretor: 'Ridley Scott', duracao: '155', classificacao: '16' }
  ];

  getFilmes(): Filme[] {
    return this.filmes;
  }

  addFilme(filme: Filme) {
    this.filmes.push(filme);
  }
}
