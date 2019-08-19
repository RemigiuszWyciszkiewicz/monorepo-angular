import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CryptoListComponent } from './crypto-list/crypto-list.component';
import { TableModule } from '@myorg/shared/ui/table'
import { MainListRoutingModule } from './main-list-routing.module';
@NgModule({
  imports: [CommonModule, TableModule, MainListRoutingModule],
  declarations: [CryptoListComponent],
  exports:[CryptoListComponent],
  providers: []
})
export class MainListModule {}  
