import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: '', pathMatch: 'full', redirectTo: 'home'
  },
  {
    path: 'cursos',
    loadChildren: './cursos/cursos.module#CursosModule',
    canActivate: [AuthGuard]
  },
  {
    path:'404', component: NotFoundComponentComponent
  },
  {
    path:'**', redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
