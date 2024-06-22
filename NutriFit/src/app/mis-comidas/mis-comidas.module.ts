import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisComidasPageRoutingModule } from './mis-comidas-routing.module';

import { MisComidasPage } from './mis-comidas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisComidasPageRoutingModule
  ],
  declarations: [MisComidasPage]
})
export class MisComidasPageModule {}
