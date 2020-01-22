import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HighchartsChartModule } from 'highcharts-angular';



// Component
import { ChartComponent } from './chart/chart.component';
import { StackedComponent } from './stacked/stacked.component';
import { NavbarDashboardComponent } from './navbar-dashboard/navbar-dashboard.component';
import { GraficasComponent } from './graficas.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({

    declarations: [
        ChartComponent,
        StackedComponent,
        GraficasComponent,
        NavbarDashboardComponent,
        SidebarComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        HighchartsChartModule
    ]
})


export class ChartModule {}


