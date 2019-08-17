import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainListModule } from '@myorg/crypto/feature/main-list'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MainListModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
