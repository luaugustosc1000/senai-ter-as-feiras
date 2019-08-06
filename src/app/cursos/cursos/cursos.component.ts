import { Component, OnInit } from '@angular/core';
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [CursoService]
})
export class CursosComponent implements OnInit {

  paraExibicao: string[] = [];

 
  
  constructor(private service: CursoService) { }
   

  ngOnInit() {

    this.paraExibicao = this.service.getCursos();
  }
}
