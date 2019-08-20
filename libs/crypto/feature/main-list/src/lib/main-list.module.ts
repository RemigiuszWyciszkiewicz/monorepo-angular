import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CryptoListComponent } from './crypto-list/crypto-list.component';
import { TableModule } from '@myorg/shared/ui/table'
import { MainListRoutingModule } from './main-list-routing.module';
import { CryptoDetailComponent } from './crypto-detail/crypto-detail.component';
import { MainListComponent } from './main-list.component';
@NgModule({
  imports: [CommonModule, TableModule, MainListRoutingModule],
  declarations: [CryptoListComponent, CryptoDetailComponent, MainListComponent],
  exports:[CryptoListComponent],
  providers: []
})
export class MainListModule {}  
