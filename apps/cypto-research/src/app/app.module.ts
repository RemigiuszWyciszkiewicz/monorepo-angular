import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainListModule } from '@myorg/crypto/feature/main-list';
import { AppComponent } from './app.component';
import { DataAccessModule } from '@myorg/shared/data-access';
import { AppRoutingModule } from './app-routing.module';

const imports = [
  BrowserModule,
  MainListModule,
  DataAccessModule,
  AppRoutingModule,
  AppRoutingModule
];

@NgModule({
  declarations: [AppComponent],
  imports: [...imports],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
