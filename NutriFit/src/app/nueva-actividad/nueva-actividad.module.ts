import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaActividadPageRoutingModule } from './nueva-actividad-routing.module';

import { NuevaActividadPage } from './nueva-actividad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaActividadPageRoutingModule
  ],
  declarations: [NuevaActividadPage]
})
export class NuevaActividadPageModule {}
