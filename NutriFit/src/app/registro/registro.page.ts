import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  registro = {
    id: '',
    contrasena: '',
    rut: '',
    email: '',
    altura: '',
    peso: '',
    fechaNacimiento: '',
    region: '',
    comuna: ''
  };

  constructor(
    private navCtrl: NavController,
    private authService: AuthService
  ) { }

  onSubmit() {
    console.log(this.registro);
    this.authService.register(this.registro)
      .subscribe(
        (response) => {
          console.log('Registro exitoso:', response);
          // Redirigir al usuario a la página de inicio de sesión después del registro exitoso
          this.navCtrl.navigateBack('/inicio-sesion');
        },
        (error) => {
          console.error('Error en el registro:', error);
          // Manejar el error, por ejemplo, mostrar un mensaje al usuario
        }
      );
  }

  goToInicioSesion() {
    this.navCtrl.navigateBack('/inicio-sesion');
  }
}





















/*
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
*/
