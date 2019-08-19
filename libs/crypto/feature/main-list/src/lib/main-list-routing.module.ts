import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CryptoListComponent } from './crypto-list/crypto-list.component';


const routes: Routes = [ { path: '', component: CryptoListComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainListRoutingModule { }
