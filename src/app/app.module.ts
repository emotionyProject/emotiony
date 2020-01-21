import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


// import { HighchartsChartModule } from 'highcharts-angular';
// import {FormsModule} from '@angular/forms';

// Services
import { ServiceModule } from './services/service.module';


// Modulos propios
import { MainModule } from './pages/main/main.module';
import { ChartModule } from './pages/graficas/chart.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FormsModule,
    // HighchartsChartModule,
    ServiceModule,
    MainModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
