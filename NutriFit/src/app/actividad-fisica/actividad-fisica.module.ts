import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActividadFisicaPageRoutingModule } from './actividad-fisica-routing.module';

import { ActividadFisicaPage } from './actividad-fisica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActividadFisicaPageRoutingModule
  ],
  declarations: [ActividadFisicaPage]
})
export class ActividadFisicaPageModule {}
