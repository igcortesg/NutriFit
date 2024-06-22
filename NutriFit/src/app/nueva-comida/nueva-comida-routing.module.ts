import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevaComidaPage } from './nueva-comida.page';

const routes: Routes = [
  {
    path: '',
    component: NuevaComidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevaComidaPageRoutingModule {}
