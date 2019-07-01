import { AlertModalService } from './../../shared/alert-modal.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CursosService } from '../cursos.service';
import { Curso } from '../curso';
import { Observable, empty, Subject, EMPTY } from 'rxjs';
import { catchError, take, switchMap } from 'rxjs/operators';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router, ActivatedRoute } from '@angular/router';
import { Cursos2Service } from '../cursos2.service';
import { CursoDetalheComponent } from '../curso-detalhe/curso-detalhe.component';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss']
})
export class CursosListaComponent implements OnInit {
  cursos$: Observable<Curso[]>;
  error$ = new Subject<boolean>();  

  //@ViewChild('deleteModal', {static: false}) deleteModal;

  constructor(private service: Cursos2Service,
    private alertService: AlertModalService,
    private router: Router,
    private route: ActivatedRoute,
    private cursoDetalhe: CursoDetalheComponent
  ) { }

  ngOnInit() {
    this.carregaCursos();
  }

  carregaCursos() {
    this.cursos$ = this.service.list().pipe(
      catchError(error => {
        console.error(error);
        this.handleError();
        return EMPTY;
      })
    );
  }
  onRefresh(){    
    this.carregaCursos();
    this.router.navigate(['/cursos']);
  }
  handleError() {
    this.alertService.showAlertDanger('deu erro');
  }  
  onDetalhe(id) {    
    this.router.navigate(['detalhe', id], { relativeTo: this.route });
    this.cursoDetalhe.onRefresh();
  }
  onDelete(curso: Curso) {
    const result$ = this.alertService.showConfirm('Confirmação', 'Tem certeza que deseja deletar?');
    result$.asObservable().pipe(
      take(1),
      switchMap(result => result ? this.service.remove(curso.id) : EMPTY)
    ).subscribe(
      success => {
        this.onRefresh();
      },
      error => this.alertService.showAlertDanger('Erro ao deletar')

    );
  }
}
