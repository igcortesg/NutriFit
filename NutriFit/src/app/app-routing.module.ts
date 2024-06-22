import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'tabs', pathMatch: 'full' },
  { path: 'tabs', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule) },
  { path: 'inicio', loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioPageModule) },
  { path: 'mis-comidas', loadChildren: () => import('./mis-comidas/mis-comidas.module').then(m => m.MisComidasPageModule) },
  { path: 'actividad-fisica', loadChildren: () => import('./actividad-fisica/actividad-fisica.module').then(m => m.ActividadFisicaPageModule) },
  { path: 'mi-perfil', loadChildren: () => import('./mi-perfil/mi-perfil.module').then(m => m.MiPerfilPageModule) },
  {
    path: 'nueva-comida',
    loadChildren: () => import('./nueva-comida/nueva-comida.module').then( m => m.NuevaComidaPageModule)
  },
  {
    path: 'nueva-actividad',
    loadChildren: () => import('./nueva-actividad/nueva-actividad.module').then( m => m.NuevaActividadPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
