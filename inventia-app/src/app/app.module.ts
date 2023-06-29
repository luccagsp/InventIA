import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComoFuncionaComponent } from './components/como-funciona/como-funciona.component';
import { HeaderComponent } from './components/header/header.component';
import { IngameComponent } from './components/ingame/ingame.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { ReportarComponent } from './components/reportar/reportar.component';
import { ModoJuegoComponent } from './components/menu/modo-juego/modo-juego.component';

@NgModule({
  declarations: [
    AppComponent,
    ComoFuncionaComponent,
    HeaderComponent,
    IngameComponent,
    InicioComponent,
    LoginComponent,
    MenuComponent,
    ReportarComponent,
    ModoJuegoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
