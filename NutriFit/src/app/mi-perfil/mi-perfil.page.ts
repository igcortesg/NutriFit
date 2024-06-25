import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.page.html',
  styleUrls: ['./mi-perfil.page.scss'],
})
export class MiPerfilPage implements OnInit {

  user: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.loadUserData();
  }

  loadUserData() {
    this.authService.getUserData().subscribe(
      (data) => {
        this.user = data;
        this.calculateIMC();
      },
      (error) => {
        console.error('Error al obtener los datos del usuario', error);
      }
    );
  }

  calculateIMC() {
    if (this.user.altura && this.user.peso) {
      const alturaEnMetros = this.user.altura / 100;
      const imc = this.user.peso / (alturaEnMetros * alturaEnMetros);
      this.user.imc = imc.toFixed(2);
      this.user.estado = this.getEstado(imc);
    }
  }

  getEstado(imc: number) {
    if (imc < 16) {
      return 'Muy bajo peso';
    } else if (imc >= 16 && imc < 18.5) {
      return 'Bajo peso';
    } else if (imc >= 18.5 && imc < 25) {
      return 'Saludable';
    } else if (imc >= 25 && imc < 30) {
      return 'Sobrepeso';
    } else {
      return 'Obeso';
    }
  }

  calculateAge(fechaNacimiento: string): number {
    const birthDate = new Date(fechaNacimiento);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
}
