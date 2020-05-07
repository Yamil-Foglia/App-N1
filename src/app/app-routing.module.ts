import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home/:typeOfUser',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'add/:typeOfUser',
    loadChildren: () => import('./add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'galery/:typeOfUser',
    loadChildren: () => import('./galery/galery.module').then( m => m.GaleryPageModule)
  },
  {
    path: 'graphics/:typeOfUser',
    loadChildren: () => import('./graphics/graphics.module').then( m => m.GraphicsPageModule)
  },
  {
    path: 'list/:typeOfUser',
    loadChildren: () => import('./list/list.module').then( m => m.ListPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
