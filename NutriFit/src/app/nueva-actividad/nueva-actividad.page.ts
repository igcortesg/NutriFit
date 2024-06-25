// nueva-comida.page.ts
import { Component, OnInit } from '@angular/core';
import { ActividadesService } from '../services/actividades.service';

@Component({
  selector: 'app-nueva-actividad',
  templateUrl: './nueva-actividad.page.html',
  styleUrls: ['./nueva-actividad.page.scss'],
})
export class NuevaActividadPage implements OnInit {
  actividades: any[] = [];

  constructor(private actividadesService: ActividadesService) {}

  ngOnInit() {
    this.actividadesService.getActividades().subscribe(data => {
      this.actividades = data;
    });
  }
}










