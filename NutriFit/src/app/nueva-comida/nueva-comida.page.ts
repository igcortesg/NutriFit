// nueva-comida.page.ts
import { Component, OnInit } from '@angular/core';
import { ComidasService } from '../services/comidas.service';

@Component({
  selector: 'app-nueva-comida',
  templateUrl: './nueva-comida.page.html',
  styleUrls: ['./nueva-comida.page.scss'],
})
export class NuevaComidaPage implements OnInit {
  comidas: any[] = [];

  constructor(private comidasService: ComidasService) {}

  ngOnInit() {
    this.comidasService.getComidas().subscribe(data => {
      this.comidas = data;
    });
  }
}
