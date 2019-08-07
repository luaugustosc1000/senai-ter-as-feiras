import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  private alunos: string[ ] = [ ];
  
  constructor() {

    this.alunos = ['Richard', 'Sidão', 'Andrés Rios', 'Rafael Galhardo', 'Eurico Campello' ];
   }

   getAlunos() {
     return this.alunos;
   }
}
