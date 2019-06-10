import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosModule } from './cursos/cursos.module';
import { AlunosComponent } from './alunos/alunos.component';
import { AlunosModule } from './alunos/alunos.module';
import { AuthService } from './login/auth.service';
import { FormsModule } from '@angular/forms';
import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent    
  ],
  imports: [
    BrowserModule,
    CursosModule,
    AlunosModule,
    AppRoutingModule,
    FormsModule,
    AppBootstrapModule,
    BrowserAnimationsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
