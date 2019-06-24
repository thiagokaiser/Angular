import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CursosService } from '../cursos.service';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { CursosListaComponent } from '../cursos-lista/cursos-lista.component';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.scss']
})
export class CursosFormComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  idRegistro: number;

  constructor(private fb: FormBuilder,
    private service: CursosService,
    private modal: AlertModalService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
    private cursosLista: CursosListaComponent
  ) { }

  ngOnInit() {

    const curso = this.route.snapshot.data['curso'];

    this.form = this.fb.group({
      id: [curso.id],
      nome: [curso.nome, [Validators.required, Validators.minLength(3), Validators.maxLength(60)]]
    });
  }  

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
      this.idRegistro = this.form.value.id;
      if (this.idRegistro){
        msgSuccess = 'Alterado com sucesso';
      }
      this.service.save(this.form.value).subscribe(
        success => {
          this.modal.showAlertSuccess(msgSuccess);
          if(this.idRegistro){
            this.router.navigate(['/cursos/detalhe', this.idRegistro]);
          }
          else{
            this.router.navigate(['/cursos']);
          }          
          //this.location.back();
          this.cursosLista.carregaCursos();
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
