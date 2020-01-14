import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderEmotionyComponent } from './shared/header-emotiony/header-emotiony.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PlanetComponent } from './dashboard/planet/planet.component';
import { FooterDownloadComponent } from './shared/footer-download/footer-download.component';
import { LoginComponent } from './modal/login/login.component';
import { ContactComponent } from './modal/contact/contact.component';

import {FormsModule} from '@angular/forms';

// Services
import { ServiceModule } from './services/service.module';




@NgModule({
  declarations: [
    AppComponent,
    HeaderEmotionyComponent,
    NavbarComponent,
    PlanetComponent,
    FooterDownloadComponent,
    LoginComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
