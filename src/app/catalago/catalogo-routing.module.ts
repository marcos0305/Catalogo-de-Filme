import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './catalogo.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: CatalogoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogoRoutingModule {}

