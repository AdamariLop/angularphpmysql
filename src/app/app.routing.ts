import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ModificarComponent } from './components/modificar/modificar.component';
import { NuevoComponent } from './components/nuevo/nuevo.component';

const APP_ROUTES:Routes=[
    {path: 'home', component: HomeComponent},
    {path: 'modificar', component: ModificarComponent},
    {path: 'nuevo', component: NuevoComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING=RouterModule.forRoot(APP_ROUTES);