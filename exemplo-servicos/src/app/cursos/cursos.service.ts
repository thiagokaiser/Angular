import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from '../shared/log.service';

@Injectable()
export class CursosService{

    emitirCursoCriado = new EventEmitter<string>();

    cursos: string[] = ['curso01','curso02','curso03'];
    getCursos(){
        this.logService.consoleLog('obtendo lista de cursos');
        return this.cursos;
    }
    constructor(private logService: LogService){
        console.log('cria servico');
    }
    addCurso(curso: string){
        this.logService.consoleLog('criando um novo curso ' + curso );
        this.logService.consoleLog(`criando um novo curso ${curso}`);
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);

    }
    
}