import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


//Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { MenuComponent } from './components/menu/menu.component';
import { IngameComponent } from './components/ingame/ingame.component';
import { LoginComponent } from './components/login/login.component';
import { ComoFuncionaComponent } from './components/como-funciona/como-funciona.component';
import { ReportarComponent } from './components/reportar/reportar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    MenuComponent,
    IngameComponent,
    LoginComponent,
    ComoFuncionaComponent,
    ReportarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
