import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {
    ModalService,
    UserService,
    EmotioniesService,
    ProjectsService,
    RightSidebarService
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
        ProjectsService,
        RightSidebarService
    ],
    declarations: []
})

export class ServiceModule { }
