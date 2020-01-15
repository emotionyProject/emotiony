import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderEmotionyComponent } from './shared/header-emotiony/header-emotiony.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PlanetComponent } from './dashboard/planet/planet.component';
import { FooterDownloadComponent } from './shared/footer-download/footer-download.component';
import { LoginComponent } from './modal/login/login.component';
import { ContactComponent } from './modal/contact/contact.component';
import { GraficasComponent } from './dashboard/graficas/graficas.component';
import { MainComponent } from './pages/main/main.component';
import { HighchartsChartModule } from 'highcharts-angular';

// Services
import { ServiceModule } from './services/service.module';
import { ChartComponent } from './graficas/chart/chart.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderEmotionyComponent,
    NavbarComponent,
    PlanetComponent,
    FooterDownloadComponent,
    LoginComponent,
    ContactComponent,
    GraficasComponent,
    MainComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HighchartsChartModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
