import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisComidasPage } from './mis-comidas.page';

const routes: Routes = [
  {
    path: '',
    component: MisComidasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisComidasPageRoutingModule {}
