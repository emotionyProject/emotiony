import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { UserComponent } from './user.component';

// Shared Module

import { SharedModule } from '../shared/shared.module';




@NgModule({

    declarations: [
        UserComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        SharedModule
    ]
})


export class UserModule {}
