import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaComidaPageRoutingModule } from './nueva-comida-routing.module';

import { NuevaComidaPage } from './nueva-comida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaComidaPageRoutingModule
  ],
  declarations: [NuevaComidaPage]
})
export class NuevaComidaPageModule {}
