import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CursosService } from '../cursos.service';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.scss']
})
export class CursosFormComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder,
    private service: CursosService,
    private modal: AlertModalService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    //this.route.params.subscribe(
    //  (params: any) => {
    //    const id = params['id'];
    //    console.log(id);
    //    const curso$ = this.service.loadByID(id);
    //    curso$.subscribe(curso => {
    //      this.updateForm
    //    });
    //  }
    //);
    //this.route.params
    //.pipe(
    //  map((params: any) => params['id']),
    //  switchMap(id => this.service.loadByID(id)),
    //  //switchMap(cursos => obterAutos)
    //)
    //.subscribe(curso => this.updateForm(curso));

    // concatMap - ordem da requisicao importa
    // mergemap - ordem nao importa
    // exhaustmap - casos de login

    const curso = this.route.snapshot.data['curso'];

    this.form = this.fb.group({
      id: [curso.id],
      nome: [curso.nome, [Validators.required, Validators.minLength(3), Validators.maxLength(60)]]
    });
  }

  //updateForm(curso){
  //  this.form.patchValue({
  //    id: curso.id,
  //    nome: curso.nome
  //  });
  //}

  hasError(field: string) {
    return this.form.get(field).errors;
  }
  onSubmit() {
    this.submitted = true;
    console.log(this.form.value);
    if (this.form.valid) {
      console.log('submit');
      let msgSuccess = 'Criado com sucesso';
      let msgError   = 'Erro ao atualizar';
      if (this.form.value.id){
        msgSuccess = 'Alterado com sucesso';
      }
      this.service.save(this.form.value).subscribe(
        success => {
          this.modal.showAlertSuccess(msgSuccess);
          this.location.back();
        },
        error => this.modal.showAlertDanger(msgError)
      );      
    }
  }
  onCancel() {
    this.submitted = false;
    this.form.reset();
    console.log('cancel');

  }
}
