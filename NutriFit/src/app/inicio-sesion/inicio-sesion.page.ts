import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage {
  inicioSesion = {
    email: '',
    contrasena: ''
  };

  constructor(
    private navCtrl: NavController,
    private authService: AuthService
  ) { }

  onSubmit() {
    console.log(this.inicioSesion);
    this.authService.login(this.inicioSesion.email, this.inicioSesion.contrasena)
      .subscribe(
        (response) => {
          console.log('Login exitoso:', response);
          // Aquí el usuario será redirigido automáticamente por el servicio de autenticación
        },
        (error) => {
          console.error('Error en el inicio de sesión:', error);
          // Manejar el error, por ejemplo, mostrar un mensaje al usuario
        }
      );
  }

  goToRegistro() {
    this.navCtrl.navigateForward('/registro');
  }
}



/*
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
*/