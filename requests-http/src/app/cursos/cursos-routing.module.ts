import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';
import { CursosFormComponent } from './cursos-form/cursos-form.component';
import { CursoResolverGuard } from './guards/curso-resolver.guard';
import { AuthGuard } from '../guards/auth.guard';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

const routes: Routes = [
  { path: '', component: CursosListaComponent, children : [
      { path: 'novo', component: CursosFormComponent, resolve: {curso: CursoResolverGuard}},
      { path: 'editar/:id', component: CursosFormComponent, resolve: {curso: CursoResolverGuard}},
      { path: 'detalhe/:id', component: CursoDetalheComponent, resolve: {curso: CursoResolverGuard}}
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
