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
import { ProjectModule } from './pages/projects/project.module';
import { UserModule } from './pages/user/user.module';
import { SharedModule } from './pages/shared/shared.module';




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
    ChartModule,
    ProjectModule,
    UserModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
