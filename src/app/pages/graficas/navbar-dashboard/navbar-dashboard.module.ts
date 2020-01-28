import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarDashboardComponent } from './navbar-dashboard.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    NavbarDashboardComponent
  ],
  exports: [
    NavbarDashboardComponent
  ]
})

export class NavbarDashboardModule {}
