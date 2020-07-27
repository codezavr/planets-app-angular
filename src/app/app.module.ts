import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetCardsComponent } from './planet-cards/planet-cards.component';
import { PlanetCardComponent } from './planet-cards/planet-card/planet-card.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login/login.service';
import { LoginGuard } from './login/login.guard';
import { PlanetItemComponent } from './planet-item/planet-item.component';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PlanetCardsComponent,
    PlanetCardComponent,
    PlanetItemComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ AppService, LoginService, LoginGuard ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
