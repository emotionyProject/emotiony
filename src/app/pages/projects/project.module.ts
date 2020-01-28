import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ProjectsComponent } from './projects.component';
import { CreateTagComponent } from './create-tag/create-tag.component';

// Shared Module
import { NavbarDashboardModule } from '../graficas/navbar-dashboard/navbar-dashboard.module';
import { SidebarModule } from '../graficas/sidebar/sidebar.module';
import { ListTagsComponent } from './list-tags/list-tags.component';








@NgModule({

    declarations: [
        ProjectsComponent,
        CreateTagComponent,
        ListTagsComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        NavbarDashboardModule,
        SidebarModule
    ]
})


export class ProjectModule {}
