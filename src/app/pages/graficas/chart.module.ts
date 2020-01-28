import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HighchartsChartModule } from 'highcharts-angular';
import { ReactiveFormsModule } from '@angular/forms';



// Component
import { ChartComponent } from './chart/chart.component';
import { StackedComponent } from './stacked/stacked.component';
// import { NavbarDashboardComponent } from './navbar-dashboard/navbar-dashboard.component';
import { GraficasComponent } from './graficas.component';
// import { SidebarComponent } from './sidebar/sidebar.component';
import { BarchartComponent } from './barchart/barchart.component';
import { AreaBasicComponent } from './area-basic/area-basic.component';
import { AreaNegativeComponent } from './area-negative/area-negative.component';
import { MapComponent } from './map/map.component';
import { HeatmapComponent } from './heatmap/heatmap.component';
import { ParetoComponent } from './pareto/pareto.component';
import { SemiCircleComponent } from './semi-circle/semi-circle.component';
import { LanguagesComponent } from './languages/languages.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { FiltersComponent } from './filters/filters.component';

// Shared Modules
import { NavbarDashboardModule } from './navbar-dashboard/navbar-dashboard.module';
import { SidebarModule } from './sidebar/sidebar.module';






@NgModule({

    declarations: [
        ChartComponent,
        StackedComponent,
        GraficasComponent,
        BarchartComponent,
        AreaBasicComponent,
        AreaNegativeComponent,
        MapComponent,
        HeatmapComponent,
        ParetoComponent,
        SemiCircleComponent,
        LanguagesComponent,
        AnalyticsComponent,
        FiltersComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        HighchartsChartModule,
        ReactiveFormsModule,
        NavbarDashboardModule,
        SidebarModule
    ]
})


export class ChartModule {}


