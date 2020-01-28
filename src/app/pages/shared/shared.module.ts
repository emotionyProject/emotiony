import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavbarDashboardComponent } from './navbar-dashboard/navbar-dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    FooterComponent,
    NavbarDashboardComponent,
    SidebarComponent
  ],
  exports: [
    FooterComponent,
    NavbarDashboardComponent,
    SidebarComponent
  ]
})

export class SharedModule {}