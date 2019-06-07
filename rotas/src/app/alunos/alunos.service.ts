import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos: any[] = [
    {id: 1, nome:'aluno 01',email: 'a@a.com'},
    {id: 2, nome:'aluno 02',email: 'a@a.com'},
    {id: 3, nome:'aluno 03',email: 'a@a.com'},
    {id: 4, nome:'aluno 04',email: 'a@a.com'}
  ]

  getAlunos(){
    return this.alunos;
  }

  getAluno(id:number){
    let alunos = this.getAlunos();
    for (let i=0; i<alunos.length; i++){
      let aluno = alunos[i];
      if (aluno.id == id){
        return aluno;
      }      
    }
    return null;
  }

  constructor() { }
}
