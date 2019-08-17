import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CryptoListComponent } from './crypto-list/crypto-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CryptoListComponent],
  exports:[CryptoListComponent],
  providers: []
})
export class MainListModule {}  
