import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-ola-mundo2',
  templateUrl: './meu-ola-mundo2.component.html',
  styleUrls: ['./meu-ola-mundo2.component.css']
})
export class MeuOlaMundo2Component {
  url = 'www.thiagokaiser.com.br';  
  imgUrl = 'http://tdn.totvs.com/download/attachments/465374296/image2019-3-21_11-15-34.png?version=1&modificationDate=1553177734617&api=v2';
  getValor(){
    return 4;
  }
}
