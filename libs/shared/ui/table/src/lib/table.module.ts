import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapTableComponent } from './bootstrap-table/bootstrap-table.component';

const imports = [CommonModule];
const declarations = [BootstrapTableComponent];
const exports = [BootstrapTableComponent];

@NgModule({
  imports: [...imports],
  declarations: [...declarations],
  exports: [...exports]
})
export class TableModule {}
