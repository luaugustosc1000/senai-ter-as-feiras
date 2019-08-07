import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css'],
  providers: [AlunoService]
})
export class AlunoComponent implements OnInit {

  paraExibicaoAluno: string[] = [];

  constructor(private service: AlunoService) { }

  ngOnInit() {
    this.paraExibicaoAluno = this.service.getAlunos();
  }

}
