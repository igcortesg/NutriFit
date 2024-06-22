import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'inicio',
        loadChildren: () => import('../inicio/inicio.module').then(m => m.InicioPageModule)
      },
      {
        path: 'mis-comidas',
        loadChildren: () => import('../mis-comidas/mis-comidas.module').then(m => m.MisComidasPageModule)
      },
      {
        path: 'actividad-fisica',
        loadChildren: () => import('../actividad-fisica/actividad-fisica.module').then(m => m.ActividadFisicaPageModule)
      },
      {
        path: 'mi-perfil',
        loadChildren: () => import('../mi-perfil/mi-perfil.module').then(m => m.MiPerfilPageModule)
      },
      {
        path: 'nueva-actividad',
        loadChildren: () => import('../nueva-actividad/nueva-actividad.module').then(m => m.NuevaActividadPageModule)
      },
      {
        path: 'nueva-comida',
        loadChildren: () => import('../nueva-comida/nueva-comida.module').then(m => m.NuevaComidaPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/inicio',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
