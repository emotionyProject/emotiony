import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Component
import { HeaderEmotionyComponent } from './shared/header-emotiony/header-emotiony.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PlanetComponent } from './dashboard/planet/planet.component';
import { FooterDownloadComponent } from './shared/footer-download/footer-download.component';
import { LoginComponent } from './modal/login/login.component';
import { ContactComponent } from './modal/contact/contact.component';
import { MainComponent } from './main.component';
import { GameComponent } from './game/game.component';


@NgModule({

    declarations: [
        HeaderEmotionyComponent,
        NavbarComponent,
        PlanetComponent,
        FooterDownloadComponent,
        LoginComponent,
        ContactComponent,
        MainComponent,
        GameComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ]
})


export class MainModule {}

