import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from '../curso';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss']
})
export class CursoDetalheComponent implements OnInit {

  curso: Curso; 

  constructor(private route: ActivatedRoute,
              private router: Router) {
                route.params.subscribe(val => {
                  this.onRefresh();
                });
               }

  ngOnInit() {
    //this.onRefresh();    
  }

  onEdit(id) {    
    this.router.navigate(['cursos/editar', id]);    
  }
  onCancel(){

  }
  onRefresh(){
    console.log('teste');
    let curso = this.route.snapshot.data['curso'];
    this.curso = curso;
  }

}
