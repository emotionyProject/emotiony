import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    ModalService,
    UserService,
    EmotioniesService,
    ProjectsService
} from './service.index';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [
        ModalService,
        UserService,
        EmotioniesService,
        ProjectsService
    ],
    declarations: []
})

export class ServiceModule { }
