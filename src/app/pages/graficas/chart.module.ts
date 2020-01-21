import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HighchartsChartModule } from 'highcharts-angular';


// Component
import { ChartComponent } from './chart/chart.component';
import { StackedComponent } from './stacked/stacked.component';

import { GraficasComponent } from './graficas.component';




@NgModule({

    declarations: [
        ChartComponent,
        StackedComponent,
        GraficasComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        HighchartsChartModule
    ]
})


export class ChartModule {}


