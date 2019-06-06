import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-cursos-detalhe',
  templateUrl: './cursos-detalhe.component.html',
  styleUrls: ['./cursos-detalhe.component.css'],
  providers: [CursosService]
})
export class CursosDetalheComponent {
  nome = 'thiago';  

  cursos;

  constructor(cursosService: CursosService) {    
    this.cursos = cursosService.getCursos();
   }
}
