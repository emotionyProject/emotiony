import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProjectsComponent } from './projects.component';
import { CreateTagComponent } from './create-tag/create-tag.component';
import { ListTagsComponent } from './list-tags/list-tags.component';

// Shared Module
import { SharedModule } from '../shared/shared.module';


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
        SharedModule
    ]
})


export class ProjectModule {}
