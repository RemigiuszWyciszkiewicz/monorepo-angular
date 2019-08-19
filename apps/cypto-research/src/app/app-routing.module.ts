import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'start-page', pathMatch: 'full' },
  {
    path: 'start-page',
    loadChildren: () =>
      import('@myorg/crypto/feature/start-page').then(m => m.StartPageModule)
  },
  {
    path: 'main-list',
    loadChildren: () =>
      import('@myorg/crypto/feature/main-list').then(m => m.MainListModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
