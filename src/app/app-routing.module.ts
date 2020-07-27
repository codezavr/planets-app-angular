import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetCardsComponent } from './planet-cards/planet-cards.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';
import { PlanetItemComponent } from './planet-item/planet-item.component';
import { PlanetItemResolver } from './planet-item/planet-item.resolver';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    canActivate: [ LoginGuard ],
    component: PlanetCardsComponent,
    pathMatch: 'full'
  },
  {
    path: 'planets',
    canActivate: [ LoginGuard ],
    children: [
      {
        path: ':planet',
        component: PlanetItemComponent,
        resolve: {
          planet: PlanetItemResolver
        }
      }
    ],
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
