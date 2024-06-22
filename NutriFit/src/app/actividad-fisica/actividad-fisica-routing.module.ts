import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActividadFisicaPage } from './actividad-fisica.page';

const routes: Routes = [
  {
    path: '',
    component: ActividadFisicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActividadFisicaPageRoutingModule {}
