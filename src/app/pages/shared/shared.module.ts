import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavbarDashboardComponent } from './navbar-dashboard/navbar-dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RightSidebarModule } from './right-sidebar/right-sidebar.module';




@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RightSidebarModule
  ],
  declarations: [
    FooterComponent,
    NavbarDashboardComponent,
    SidebarComponent,
  ],
  exports: [
    FooterComponent,
    NavbarDashboardComponent,
    SidebarComponent,
    RightSidebarModule
  ]
})

export class SharedModule {}
