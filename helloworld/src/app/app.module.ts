import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuOlaMundoComponent } from './exemplo01/ola-mundo.component';
import { MeuOlaMundo2Component } from './exemplo02/meu-ola-mundo2.component';
import { CursosModule } from './exemplo03/cursos.module';
import { Exemplo04Component } from './exemplo04/exemplo04.component';
import { ServicosComponent } from './servicos/servicos.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuOlaMundoComponent,
    MeuOlaMundo2Component,
    Exemplo04Component,
    ServicosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
