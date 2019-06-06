import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo04',
  templateUrl: './exemplo04.component.html',
  styleUrls: ['../exemplo02/meu-ola-mundo2.component.css']
})
export class Exemplo04Component{
    
  valorAtual: string = '';
  valorSalvo: string = '';

  botaoClique(valor){
    this.valorAtual = valor;
  }

  getValorAtual(){

  }
  salvaValor(valor){
    this.valorSalvo = valor;
  }


}
