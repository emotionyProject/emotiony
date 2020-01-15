import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    ModalService,
    UserService,
    EmotioniesService
} from './service.index';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [
        ModalService,
        UserService,
        EmotioniesService
    ],
    declarations: []
})

export class ServiceModule { }
