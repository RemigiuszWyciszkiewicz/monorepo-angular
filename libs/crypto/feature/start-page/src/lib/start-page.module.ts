import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartPageComponent } from './start-page/start-page.component';
import { StartPageRoutingModule } from 'libs/crypto/feature/start-page/src/lib/start-page-routing.module'
@NgModule({
  imports: [CommonModule, StartPageRoutingModule],
  declarations: [StartPageComponent],
  bootstrap: []
})
export class StartPageModule {}
