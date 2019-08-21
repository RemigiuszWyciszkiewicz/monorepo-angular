import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CryptoListComponent } from './crypto-list/crypto-list.component';
import { CryptoDetailComponent } from './crypto-detail/crypto-detail.component';
import { MainListComponent } from './main-list.component';

const routes: Routes = [
  {
    path: '',
    component: MainListComponent,
    children: [
      {
        path: '',
        component: CryptoListComponent
      },
      { path: ':id', component: CryptoDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainListRoutingModule {}
