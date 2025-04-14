import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './catalago/catalogo.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'catalogo',
  },
  {
    path: 'catalogo',
    loadChildren: () =>
      import('./catalago/catalogo.module').then((m) => m.CatalogoModule),
  },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
