import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderEmotionyComponent } from './shared/header-emotiony/header-emotiony.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PlanetComponent } from './dashboard/planet/planet.component';
import { FooterDownloadComponent } from './shared/footer-download/footer-download.component';
import { LoginComponent } from './modal/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderEmotionyComponent,
    NavbarComponent,
    PlanetComponent,
    FooterDownloadComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
