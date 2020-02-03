import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { RightSidebarComponent } from './right-sidebar.component';
import { LocationBarComponent } from './location-bar/location-bar.component';
import { LanguageBarComponent } from './language-bar/language-bar.component';
import { HastagBarComponent } from './hastag-bar/hastag-bar.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    RightSidebarComponent,
    LocationBarComponent,
    LanguageBarComponent,
    HastagBarComponent
  ],
  exports: [
    RightSidebarComponent
  ]
})

export class RightSidebarModule {}
