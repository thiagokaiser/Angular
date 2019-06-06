import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  getCursos(){
    return ['o fabio','é','uma','biba'];
  }  
  constructor() { }
}
