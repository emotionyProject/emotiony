import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraficasComponent } from './pages/graficas/graficas.component';
import { MainComponent } from './pages/main/main.component';


const routes: Routes = [
  {path: 'dashboard', component: GraficasComponent},
  {path: '**', component: MainComponent}
];

@NgModule({
  imports: [
        RouterModule.forRoot(routes)
      ],
  exports: [
          RouterModule
    ]
})
export class AppRoutingModule { }
