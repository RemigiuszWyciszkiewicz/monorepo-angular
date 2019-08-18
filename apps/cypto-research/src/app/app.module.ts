import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainListModule } from '@myorg/crypto/feature/main-list'
import { AppComponent } from './app.component';
import { DataAccessModule } from '@myorg/shared/data-access'
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MainListModule, DataAccessModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
